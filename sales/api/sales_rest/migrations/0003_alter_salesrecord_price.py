# Generated by Django 4.0.3 on 2022-10-26 04:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sales_rest', '0002_automobilevo_import_href'),
    ]

    operations = [
        migrations.AlterField(
            model_name='salesrecord',
            name='price',
            field=models.PositiveIntegerField(),
        ),
    ]
