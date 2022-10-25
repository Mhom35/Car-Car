from django.urls import path
from .views import api_customer, api_list_sales_record, api_sales_person

urlpatterns = [
    path("sales/", api_list_sales_record, name="api_sales_record"),
    path(
        "<str:car_vo_id>/sales/",
        api_list_sales_record,
        name="api_list_shoe",
    ),
    path("sales_person/", api_sales_person, name="api_sales_person"),
    path("customer/", api_customer, name="api_customer"),
]
