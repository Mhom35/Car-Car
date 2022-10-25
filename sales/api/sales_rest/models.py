from django.db import models
from django.urls import reverse

# Create your models here.
class AutoMobileVO(models.Model):
    color = models.CharField(max_length=50)
    year = models.PositiveSmallIntegerField()
    vin = models.CharField(max_length=17, unique=True)
    import_href = models.CharField(max_length=200, unique=True)

class SalesPerson(models.Model):
    name = models.CharField(max_length=200)
    employeeID = models.PositiveIntegerField(unique=True)

    def __str__(self):
        return self.name

    def get_api_url(self):
        return reverse("api_show_salesPerson", kwargs={"pk": self.pk})


class Customer(models.Model):
    name = models.CharField(max_length=200)
    address = models.CharField(max_length=500)
    phone_num = models.CharField(max_length=100)

    def __str__(self):
        return self.name

    def get_api_url(self):
        return reverse("api_show_customer", kwargs={"pk": self.pk})

class SalesRecord(models.Model):
    SalesPerson = models.ForeignKey(SalesPerson, related_name="sales_person", on_delete=models.PROTECT)
    Automobile = models.ForeignKey(
        AutoMobileVO,
        related_name="automobile",
        on_delete=models.PROTECT,
    )
    customer = models.ForeignKey(Customer, related_name="customer",on_delete=models.PROTECT)
    price = models.PositiveIntegerField(unique=True)

    def get_api_url(self):
        return reverse("api_show_salesrecord", kwargs={"pk": self.pk})
