from django.shortcuts import render

# Create your views here.




def landing_page(request):
	if request.method == 'GET':
		args = {}
		return render(request,'user/login.html', args)