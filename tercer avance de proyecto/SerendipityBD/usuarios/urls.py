from django.urls import path
from django.shortcuts import render
from . import views

def inicio(request):
    return render(request, 'paginas/inicio.html')  # La ruta se ajusta aquí
urlpatterns = [

    path('', views.inicio, name='inicio'),
    # URLs de Usuarios
    path('usuarios/', views.usuarios_list, name='usuarios_list'),
    path('usuarios/create/', views.usuario_new, name='usuario_new'),  # URL para crear un nuevo usuario
    path('usuarios/edit/<int:pk>/', views.usuario_edit, name='usuario_edit'),  # URL para editar un usuario
    path('usuarios/delete/<int:pk>/', views.usuario_delete, name='usuario_delete'),  # URL para eliminar un usuario

    # URLs de Categorías
    path('categorias/', views.categoria_list, name='categoria_list'),
    path('categorias/create/', views.categoria_create, name='categoria_create'),
    path('categorias/edit/<int:pk>/', views.categoria_update, name='categoria_edit'),
    path('categorias/delete/<int:pk>/', views.categoria_delete, name='categoria_delete'),

    # URLs de Productos
    path('productos/', views.productos_list, name='productos_list'),  # Corregido a 'productos_list'
    path('productos/create/', views.producto_new, name='producto_new'),
    path('productos/edit/<str:pk>/', views.producto_edit, name='actualizar_producto'),
    path('productos/delete/<int:pk>/', views.producto_delete, name='eliminar_producto'),
    # URLs de Pedidos
    path('pedidos/', views.pedidos_list, name='pedidos_list'),  # Cambiado a 'pedidos_list'
    path('pedidos/create/', views.pedido_new, name='pedido_new'),
    path('pedidos/edit/<int:pk>/', views.pedido_edit, name='actualizar_pedido'),
    path('pedidos/delete/<int:pk>/', views.pedido_delete, name='pedido_delete'),
]
