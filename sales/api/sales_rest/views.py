from django.shortcuts import render
from django.http import JsonResponse
from common.json import ModelEncoder
from django.views.decorators.http import require_http_methods
import json
from .models import AutoMobileVO, Customer, SalesPerson, SalesRecord
# Create your views here.


class AutoMobileDetailEncoder(ModelEncoder):
    model = AutoMobileVO
    properties = ["color", "year", "vin", "import_href", "id"]

class SalesPersonListEncoder(ModelEncoder):
    model = SalesPerson
    properties=["name", "employeeID"]

class CustomerListEncoder(ModelEncoder):
    model = Customer
    properties = ["name", "address", "phone_num", "id"]

class SalesListEncoder(ModelEncoder):
    model = SalesRecord
    properties=["price", "id", "SalesPerson"]

    encoders = {
        "Automobile": AutoMobileDetailEncoder(),
        "SalesPerson": SalesPersonListEncoder(),
    }

    def get_extra_data(self, o):
        return {
            "vin":o.Automobile.vin,
            "customer_name":o.customer.name,
            # "customer_id":o.customer.id,
            "employeeID": o.SalesPerson.employeeID,
            "employeeName": o.SalesPerson.name,
        }

@require_http_methods(["GET", "POST"])
def api_customer(request):
    if request.method == "GET":
        customers=Customer.objects.all()
        return JsonResponse({"customers":customers}, CustomerListEncoder,)
    else:
        content = json.loads(request.body)
        new_customer = Customer.objects.create(**content)
        return JsonResponse(
            new_customer,
            encoder=CustomerListEncoder,
            safe=False,
            )

@require_http_methods(["GET", "POST"])
def api_sales_person(request):
    if request.method == "GET":
        sales_person=SalesPerson.objects.all()
        return JsonResponse({"salesPerson":sales_person}, SalesPersonListEncoder,)
    else:
        content = json.loads(request.body)

        new_sales_person = SalesPerson.objects.create(**content)
        return JsonResponse(
            new_sales_person,
            encoder=SalesPersonListEncoder,
            safe=False,
        )


@require_http_methods(["GET", "POST"])
def api_list_sales_record(request, car_vo_id=None):
    if request.method == "GET":
        if car_vo_id != None:
            sales_record = SalesRecord.objects.filter(Automobile=car_vo_id)
            return JsonResponse({"sales_record": sales_record}, SalesListEncoder,)
        else:
            sales_record =SalesRecord.objects.all()
            return JsonResponse({"sales_record": sales_record}, SalesListEncoder,safe=False)
    else:
        content = json.loads(request.body)

        try:
            # does the car even exist?
            car_href = f'/api/automobiles/{car_vo_id}/'
            car_id = AutoMobileVO.objects.get(import_href=car_href)
            content["Automobile"] = car_id
            SalesPerson_obj = SalesPerson.objects.get(employeeID=content["SalesPerson_id"])
            Customer_obj = Customer.objects.get(id=content["customer_id"])
            # delete the id pass into content
            content.pop("SalesPerson_id")
            content.pop("customer_id")
            #set content to match salesRecord model
            content["SalesPerson"] = SalesPerson_obj
            content["customer"] = Customer_obj


        except AutoMobileVO.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid car vin"},
                status=400,
            )


        new_sale_record = SalesRecord.objects.create(**content)
        return JsonResponse(
            new_sale_record,
            encoder=SalesListEncoder,
            safe=False,
        )
