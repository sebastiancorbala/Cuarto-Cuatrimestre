from django.contrib import admin
from django.urls import path, include
from . import views  # Importa las vistas del proyecto

urlpatterns = [
    path('admin/', admin.site.urls),

    # Ruta para el inicio
    path('', views.inicio, name='inicio'),

    # Incluye las URLs de la aplicación principal
    path('usuarios/', include('usuarios.urls')),  # Incluye las URLs de la app 'usuarios'
    path('productos/', include('usuarios.urls')),  # Incluye las URLs de la app 'productos'
    path('pedidos/', include('usuarios.urls')),  # Incluye las URLs de la app 'pedidos'
    path('categorias/', views.categoria_list, name='categorias'),   
    
]