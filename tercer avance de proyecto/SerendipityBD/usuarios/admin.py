from django.contrib import admin
from .models import Usuarios, Categorias, Productos, Pedidos

class UsuariosAdmin(admin.ModelAdmin):
    list_display = ('IDUsuario', 'Contrasena', 'CorreoElectronico', 'NombreUsuario')  # Mostrar IDUsuario en el admin
    search_fields = ('IDUsuario', 'NombreUsuario')  # Permitir búsqueda por IDUsuario y NombreUsuario

admin.site.register(Usuarios, UsuariosAdmin)  # Registrar Usuarios con la configuración personalizada
admin.site.register(Categorias)
admin.site.register(Productos)
admin.site.register(Pedidos)