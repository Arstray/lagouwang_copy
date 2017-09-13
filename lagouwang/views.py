from django.shortcuts import render

# Create your views here.

def flash(requset):
    return render(requset, "lagouwang/flash.html")
def index(requset):
    return render(requset, "lagouwang/index.html")
def mess(requset):
    return render(requset, "lagouwang/mess.html")
def more(requset):
    return render(requset, "lagouwang/more.html")
def me(requset):
    return render(requset, "lagouwang/me.html")
