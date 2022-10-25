from django.db import models
from django.urls import reverse


class Technician(models.Model):
    name = models.CharField(max_length=200)
    employee_number = models.PositiveIntegerField()

    def __str__(self):
        return self.name


class Appointment(models.Model):
    vin = models.CharField(max_length=17)
    owner = models.CharField(max_length=200)
    date = models.DateTimeField()
    reason = models.TextField()
    is_completed = models.BooleanField(default=False)
    is_vip = models.BooleanField(default=False)
    technician = models.ForeignKey(
        Technician,
        related_name="appointments",
        on_delete=models.CASCADE,
    )

    def __str__(self):
        return 'Appointment for ' + self.owner

    def get_api_url(self):
        return reverse("api_show_appointment", kwargs={"pk": self.pk})

    def set_vip(self):
        self.is_vip = True
        self.save()

    def finish(self):
        self.is_completed = True
        self.save()


class AutomobileVO(models.Model):
    import_href = models.CharField(max_length=200, unique=True)
    vin = models.CharField(max_length=17, unique=True)

    def __str__(self):
        return self.vin
