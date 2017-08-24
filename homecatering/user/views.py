from django.shortcuts import render
from django.contrib.auth.models import User 
from django.contrib.auth.forms import (
	UserCreationForm, 
	UserChangeForm, 
	AuthenticationForm, 
	PasswordChangeForm
	)
from django.contrib.auth import authenticate, login, logout, update_session_auth_hash
from django.forms.models import model_to_dict
from .forms import RegistrationForm, EditAccountForm
from django.http import HttpResponse

# Create your views here.




def landing_page(request):
	print("landing page ran")
	if request.method == 'GET':
		args = {'rform':RegistrationForm(), 'lform':AuthenticationForm()}
		return render(request,'user/login.html', args)

def register(request):
	print("in register")
	if request.method == "POST":
		form = RegistrationForm(request.POST)
		print("register route")
		print(form)
		if form.is_valid():
			print('valid')
			form.save()
			print("saved")
	else:
		print("Uhoh")

def home(request):
	if request.method == "POST":
		print("home has been ran")
		form = AuthenticationForm(request.POST)
		username =request.POST['username']
		password = request.POST['password']
		user = authenticate(request=request, username=username, password=password)
		if user is not None:
			login(request, user)
			# args = {'user':request.user, 'properties': Properties.properties.all()}

			return render(request, 'user/home.html')
		else:
			error = 'The Username and Password you have provided was not correct.'
			args = {'lform':form,'lError_message':error, 'rform': RegistrationForm()}
			return render(request, 'user/login.html',args)
	elif request.method == "GET":
		return render(request, 'user/home.html')

def register(request):
	if request.method == "POST":
		# print(dir(request))
		form = RegistrationForm(request.POST)
		print(form)
		if form.is_valid():
			print('valid')
			form.save()
			message = "You have successfully created an account. Login to Get Investing!"
			args = {'rform':RegistrationForm(),
					 'lform':AuthenticationForm(),
					  'lError_message':message
					  }
			return render(request, 'user/login.html', args)
		else:
			print('not valid')
			error = 'The Username you have provided is already taken.'
			args = {'rform':RegistrationForm(),'lError_message':error, 'lform':AuthenticationForm()}
			return render(request, 'user/login.html', args)

	else:
		print('wrong request sent')

