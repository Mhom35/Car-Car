import django
import os
import sys
import time
import json
import requests

sys.path.append("")
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "sales_project.settings")
django.setup()

# Import models from sales_rest, here.
from sales_rest.models import AutoMobileVO


def getAutoMobile():
    url = 'http://inventory-api:8000/api/automobiles/'
    response = requests.get(url)
    content = json.loads(response.content)
    for car in content["autos"]:
        AutoMobileVO.objects.update_or_create(
            import_href=car["href"],
            defaults={
                "color": car["color"],
                "year": car["year"],
                "vin": car["vin"]
            },
        )

def poll():
    while True:
        print('Sales poller polling for data')
        try:
            getAutoMobile()
        except Exception as e:
            print(e, file=sys.stderr)
        time.sleep(10)


if __name__ == "__main__":
    poll()
