#CREACION DE VISTAS
from django.shortcuts import render, redirect
from django.http import HttpResponse
from .models import *
from .forms import *

#DECLARACION DE FUNCION
#Se esta realizando solicitud y se responde con un texto en html

def inicio (request):
    return render(request,'paginas/inicio.html')

def nosotros(request):
    return render(request,'paginas/nosotros.html')
#ACCESO A SECCIONES DE PAGINAS 


#ACCESO A CATEGORIAS
def categoria(request):
    categoria = categorias.objects.all()
    print(categorias)
    return render (request,'categorias/index.html',{'categorias':categoria})

def create_categoria(request):
    formulario = categoriaForm(request.POST or None, request.FILES or None)
    if formulario.is_valid():
        formulario.save()
        return redirect('categorias')
    return render(request,'categorias/create_categoria.html', {'formulario': formulario})

def update_categoria(request, codigo):
    categoria = categorias.objects.get(codigo=codigo)
    formulario = categoriaForm(request.POST or None, request.FILES or None, instance=categoria)
    if formulario.is_valid() and request.POST:
      formulario.save()
      return redirect('categorias')
    return render(request,'categorias/update_categoria.html', {'formulario':formulario})

def delete_categoria(request, codigo):
    categoria = categorias.objects.get(codigo=codigo)
    categoria.delete()
    return redirect('categorias')


#ACCESO A CUENTAS
def cuenta(request):
    cuentas = Cuenta.objects.all()
    return render (request,'cuentas/index.html',{'Cuenta':cuentas})

def create_cuenta(request):
    formulario = cuentaForm(request.POST or None, request.FILES or None)
    if formulario.is_valid():
        formulario.save()
        return redirect('cuenta')
    return render(request,'cuentas/create_cuenta.html', {'formulario': formulario})

def update_cuenta(request, username):
    cuenta = Cuenta.objects.get(username=username)
    formulario = cuentaForm(request.POST or None, request.FILES or None, instance=cuenta)
    if formulario.is_valid() and request.POST:
      formulario.save()
      return redirect('cuenta')
    return render(request,'cuentas/update_cuenta.html', {'formulario':formulario})

def delete_cuenta(request, username):
    cuenta = Cuenta.objects.get(username=username)
    cuenta.delete()
    return redirect('cuenta')

#ACCESO A COLECCION
def Coleccionesv(request):
    Coleccion = Colecciones.objects.all()
    return render(request,'Coleccionesc/index.html',{'colecciones':Coleccion})

def create_coleccion(request):
    formulario = coleccionesForm(request.POST or None, request.FILES or None)
    if formulario.is_valid():
        formulario.save()
        return redirect('Colecciones')
    return render(request,'Coleccionesc/create_coleccion.html', {'formulario': formulario})

def update_coleccion(request, codigo):
    Coleccionesv = Colecciones.objects.get(codigo=codigo)
    formulario = coleccionesForm(request.POST or None, request.FILES or None, instance=Coleccionesv)
    if formulario.is_valid() and request.POST:
      formulario.save()
      return redirect('Colecciones')
    return render(request,'Coleccionesc/update_coleccion.html', {'formulario':formulario})

def delete_coleccion(request, codigo):
    Coleccionesv = Colecciones.objects.get(codigo=codigo)
    Coleccionesv.delete()
    return redirect('Colecciones')

#ACCESO A PRODUCTO
def Productosv(request):
    Producto = Productos.objects.all()
    return render(request,'productosc/index.html',{'Productos':Producto})

def create_producto(request):
    formulario = ProductosForm(request.POST or None, request.FILES or None)
    if formulario.is_valid():
        formulario.save()
        return redirect('Productos')
    return render(request,'productosc/create_producto.html', {'formulario': formulario})

def update_producto(request, codigo):
    Productosv = Productos.objects.get(codigo=codigo)
    formulario = ProductosForm(request.POST or None, request.FILES or None, instance=Productosv)
    if formulario.is_valid() and request.POST:
      formulario.save()
      return redirect('Productos')
    return render(request,'productosc/update_producto.html', {'formulario':formulario})

def delete_producto(request, codigo):
    Productosv = Productos.objects.get(codigo=codigo)
    Productosv.delete()
    return redirect('Productos') 
