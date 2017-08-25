from django.db import models
from datetime import datetime
from django.contrib.auth.models import User
# import django.utils.timezone.now

# Create your models here.

class Dish(models.Model):
	user_id = models.ForeignKey(User, on_delete=models.CASCADE)
	dish_name = models.CharField(max_length=100)
	cuisine = models.CharField(max_length=50)
	description = models.CharField(max_length=50)
	upload_date = models.DateField(auto_now_add = True)
	images = models.ImageField(upload_to="../static/food/images", blank=True)


class Review(models.Model):
	dish_id = models.ForeignKey(Dish, on_delete=models.CASCADE)
	author = models.ForeignKey(User, on_delete=models.CASCADE)
	content = models.TextField()
	rating = models.FloatField(default=1.0)


