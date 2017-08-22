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
	print("login route")
	args = {'rform':RegistrationForm(), 'lform':AuthenticationForm()}
	return render(request,'user/login.html', args)


