from django.shortcuts import render
from django.http import HttpResponse

from django.contrib.auth.models import User
from django.forms.models import model_to_dict

from .models import Dish

import json
from datetime import datetime, timedelta


# Create your views here.



def return_dishes(request):
	if request.method == "GET":
		print("Get the dishes")



def store_dishes(request):
	# Creates a list of dictionaries. Receives a JSON with key "result" and list as value
# try:
	list_of_dishes = json.loads(request.body)["result"] 
	# Note that the below defaults to User Sasha rather than the Session["User"] object
	userObj = User.objects.filter(id = 1)[0]
	# MUST BE CHANGED TO USER OBJ OF SESSION
	if len(list_of_dishes) >1:
		for dish in list_of_dishes:
			newDish = Dish(
				user_id = userObj,
				dish_name=dish["dish_name"],
				cuisine=dish["cuisine"],
				description=dish["description"]
				# Example of JSON Dish {'dish_name': 'Popcorn Chicken', 'cuisine': 'American', 'description': 'Easy to pop and delicious with sauce'}
				)
			newDish.save()
		print("Dishes have been added.")
	elif len(list_of_dishes) == 1:
		print("Dish has been added")
	# except:
	# 	raise TypeError("Issue with JSON received")
	
	return HttpResponse(request.body)

def recent_dishes(request):
	fiveDaysAgo = datetime.date(datetime.now()) - timedelta(days=5)
	dishQS = Dish.objects.raw("SELECT * FROM food_dish WHERE upload_date >{}".format(fiveDaysAgo))
	dishList = list(dishQS)
	if len(dishList) >=3: 
		final = {"result": []}
		for dish in dishList:
			dict1 = model_to_dict(dish)
			dict1["images"] = dict1["images"].url
			# print(dict1["images"].url)
			print(type(dict1["images"]))
			final["result"].append(dict1)
		print(type(final["result"][0]["images"]))
		# print(type(dict1["images"]))
		# print("dir",dir(dict1["images"]))
		return HttpResponse(json.dumps(final))
	elif len(dishList) == 0:
		dishList = Dish.objects.raw("SELECT * FROM food_dish LIMIT 10".format(fiveDaysAgo))
	else:
		print("dishQS has an error in Length")






