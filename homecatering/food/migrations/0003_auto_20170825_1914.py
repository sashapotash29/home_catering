# -*- coding: utf-8 -*-
# Generated by Django 1.11.3 on 2017-08-25 19:14
from __future__ import unicode_literals

from django.db import migrations, models
import food.models


class Migration(migrations.Migration):

    dependencies = [
        ('food', '0002_auto_20170824_1941'),
    ]

    operations = [
        migrations.AlterField(
            model_name='dish',
            name='images',
            field=models.ImageField(blank=True, null=True, upload_to=food.models.get_image_path),
        ),
    ]
