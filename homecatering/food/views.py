from django.shortcuts import render
from .models import Dish

# Create your views here.



def return_dishes(request):
	if request.method == "GET":
		print("Get the dishes")