#URLs de categoria propias 

#Se importa views para acceder a las vistas
from django.urls import path
from . import views


#Lo que esta despues de views. debe coincidir con el nombre que se dio en views.py despues de def
#despues de name= es el nomnbre que le estoy dando a esa url 

urlpatterns = [
    path('', views.inicio, name='inicio'),
    path('nosotros', views.nosotros, name='nosotros'),

#ACCESOS A INTERFAZ DE CATEGORIA
    path('categorias',views.categoria, name='categorias'),
    path('categorias/create_categoria',views.create_categoria, name='crear'),
    path('categorias/update_categoria',views.update_categoria, name='actualizar'),
    path('delete_categoria/<str:codigo>',views.delete_categoria, name='eliminar'),
    path('categorias/update_categoria/<str:codigo>',views.update_categoria, name='actualizar'),

#ACCESOS A INTERFAZ DE CUENTA
    path('cuenta',views.cuenta, name='cuenta'),
    path('cuenta/create_cuenta',views.create_cuenta, name='crear cuenta'),
    path('cuenta/update_cuenta',views.update_cuenta, name='actualizar cuenta'),
    path('delete_cuenta/<str:username>',views.delete_cuenta, name='eliminar cuenta'),
    path('cuenta/update_cuenta/<str:username>',views.update_cuenta, name='actualizar cuenta'),

#ACCESOS A INTERFAZ DE COLECCION
    path('Colecciones/',views.Coleccionesv, name='Colecciones'),
    path('Colecciones/create_coleccion',views.create_coleccion, name='crear coleccion'),
    path('Colecciones/update_coleccion',views.update_coleccion, name='actualizar coleccion'),
    path('delete_coleccion/<str:codigo>',views.delete_coleccion, name='eliminar coleccion'),
    path('Colecciones/update_coleccion/<str:codigo>',views.update_coleccion, name='actualizar coleccion'),

    #ACCESOS A INTERFAZ DE PRODUCTO
    path('Productos',views.Productosv, name='Productos'),
    path('Productos/create_producto',views.create_producto, name='crear producto'),
    path('Productos/update_producto',views.update_producto, name='actualizar producto'),
    path('delete_producto/<str:codigo>',views.delete_producto, name='eliminar producto'),
    path('Productos/update_producto/<str:codigo>',views.update_producto, name='actualizar producto'),
]

