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

urlpatterns = [
	url(r'^dishes', views.return_dishes, name="allFood"),
	url(r'^store', views.store_dishes, name="storeDishes"),
	url(r'^top', views.recent_dishes, name="recent")

]