from django.conf.urls import url
from . import views
from django.views.decorators.csrf import csrf_exempt
from django.conf import settings
from django.conf.urls.static import static
from django.contrib.auth.views import (
	logout, password_reset, 
	password_reset_done, 
	password_reset_confirm,
	password_reset_complete
	)

app_name = 'user'



urlpatterns = [
	url(r'^register$', views.register, name="register"),
	url(r'^home$', views.home, name="home"),
	url(r'^', views.landing_page, name="login"),
	
]