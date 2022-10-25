from django.contrib import admin
from .models import Customer, SalesPerson, AutoMobileVO, SalesRecord
# Register your models here.

admin.site.register(Customer)
admin.site.register(SalesPerson)
admin.site.register(AutoMobileVO)
admin.site.register(SalesRecord)
