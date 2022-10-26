from django.http import JsonResponse
import json
from .models import AutomobileVO, Technician, Appointment
from common.json import ModelEncoder
from django.views.decorators.http import require_http_methods

# Create your views here.


class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = ['import_href', 'vin']


class TechnicianEncoder(ModelEncoder):
    model = Technician
    properties = ['name', 'employee_number']

    def get_extra_data(self, o):
        return {'id': o.id}


class AppointmentEncoder(ModelEncoder):
    model = Appointment
    properties = [
        'vin',
        'owner',
        'date',
        'reason',
        'is_completed',
        'is_vip',
        'technician'
    ]

    encoders = {
        "technician": TechnicianEncoder(),
    }

    def get_extra_data(self, o):
        return {'id': o.id}


@require_http_methods(['GET', 'POST'])
def api_list_technicians(request):
    if request.method == 'GET':
        technicians = Technician.objects.all()
        return JsonResponse(
            {"technicians": technicians},
            encoder=TechnicianEncoder,
            safe=False,
        )
    else:
        content = json.loads(request.body)
        technician = Technician.objects.create(**content)
        return JsonResponse(
            technician,
            encoder=TechnicianEncoder,
            safe=False,
        )


@require_http_methods(['GET', 'POST'])
def api_list_appointments(request, vin_num=None):
    if request.method == 'GET':
        if vin_num is None:
            appointments = Appointment.objects.all()
            return JsonResponse(
                {'appointments': appointments},
                encoder=AppointmentEncoder,
                safe=False,
            )
        else:
            appointments = Appointment.objects.filter(vin=vin_num)
            return JsonResponse(
                {'appointments': appointments},
                encoder=AppointmentEncoder,
                safe=False,
            )
    else:
        content = json.loads(request.body)
        try:
            technician_id = content['technician']
            technician = Technician.objects.get(id=technician_id)
            content['technician'] = technician
        except Technician.DoesNotExist:
            return JsonResponse(
                {'message': 'Invalid technician id'},
                status=400
            )

        appointment = Appointment.objects.create(**content)
        inventory = AutomobileVO.objects.all()
        for auto in inventory:
            if appointment.vin == auto.vin:
                appointment.set_vip()

        return JsonResponse(
            appointment,
            encoder=AppointmentEncoder,
            safe=False,
        )


@require_http_methods(['GET', 'PUT', 'DELETE'])
def api_show_appointment(request, pk):
    if request.method == 'GET':
        appointment = Appointment.objects.get(id=pk)
        return JsonResponse(
            appointment,
            encoder=AppointmentEncoder,
            safe=False,
        )
    elif request.method == 'DELETE':
        count, _ = Appointment.objects.filter(id=pk).delete()
        return JsonResponse({'delete': count > 0})
    else:
        content = json.loads(request.body)
        if 'technician' in content:
            try:
                technician_id = content['technician']
                technician = Technician.objects.get(id=technician_id)
                content['technician'] = technician
            except Technician.DoesNotExist:
                return JsonResponse(
                    {'message': 'Invalid technician id'},
                    status=400
                )

        Appointment.objects.filter(id=pk).update(**content)
        appointment = Appointment.objects.get(id=pk)
        return JsonResponse(
            appointment,
            encoder=AppointmentEncoder,
            safe=False,
        )
