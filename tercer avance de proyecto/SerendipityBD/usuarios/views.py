from django.shortcuts import render, redirect, get_object_or_404
from .models import Usuarios, Categorias, Productos, Pedidos
from .forms import UsuarioForm, CategoriaForm, ProductoForm, PedidoForm

#VISTAS PARA USUARIOS
# Vista para listar usuarios
def inicio(request):
    return render(request, 'paginas/inicio.html')

def usuarios_list(request):
    usuarios = Usuarios.objects.all()
    return render(request, 'usuarios/usuarios_list.html', {'usuarios': usuarios})

# Vista para crear un nuevo usuario
def usuario_new(request):
    if request.method == "POST":
        form = UsuarioForm(request.POST)  # Crea una instancia del formulario con los datos enviados en POST
        if form.is_valid():  # Verifica si el formulario es válido
            usuario = form.save()  # Guarda el usuario en la base de datos
            return redirect('usuarios_list')  # Redirige a la lista de usuarios después de guardar
    else:
        form = UsuarioForm()  # Crea una instancia vacía del formulario si el método de solicitud no es POST
    return render(request, 'usuarios/usuarios_create.html', {'form': form})  # Renderiza el formulario en la plantilla

# Vista para editar un usuario existente
def usuario_edit(request, pk):
    usuario = get_object_or_404(Usuarios, pk=pk)
    if request.method == "POST":
        form = UsuarioForm(request.POST, instance=usuario)
        if form.is_valid():
            usuario = form.save()
            return redirect('usuarios_list')  # Redirigir a la lista de usuarios
    else:
        form = UsuarioForm(instance=usuario)
    return render(request, 'usuarios/usuarios_update.html', {'form': form})

# Vista para eliminar un usuario
def usuario_delete(request, pk):
    usuario = get_object_or_404(Usuarios, pk=pk)  # Utiliza Usuario en lugar de usuario
    if request.method == "POST":
        usuario.delete()
        return redirect('usuarios_list')
    return render(request, 'usuarios/usuarios_delete.html', {'usuario': usuario}) # Renderiza la plantilla de confirmación de eliminación
# VISTAS PARA CATEGORIAS

def categoria_list(request):
    categorias = Categorias.objects.all()  # ESTA EN MAYUSCULA Y AUN ASI DA ERROR
    return render(request, 'categorias/categoria_list.html', {'categorias': categorias})

def categoria_create(request):
    if request.method == "POST":
        form = CategoriaForm(request.POST)
        if form.is_valid():
            categoria = form.save()
            return redirect('categoria_list')  # Redirigir a la lista de categorías
    else:
        form = CategoriaForm()
    return render(request, 'categorias/categoria_create.html', {'form': form})

def categoria_update(request, pk):
    categoria = get_object_or_404(Categorias, pk=pk)
    form = CategoriaForm(instance=categoria)
    if request.method == "POST":
        form = CategoriaForm(request.POST, instance=categoria)
        if form.is_valid():
            form.save()
            return redirect('categoria_list')
    return render(request, 'categorias/categoria_update.html', {'form': form, 'formulario': form})  # Agrega 'formulario': form al contexto

def categoria_delete(request, pk):
    categoria = get_object_or_404(Categorias, pk=pk)
    if request.method == 'POST':
        categoria.delete()
        return redirect('categoria_list')
    return render(request, 'categorias/categoria_delete.html', {'categoria': categoria})

#VISTAS PARA PRODUCTOS
# Vista para listar productos
def productos_list(request):
    productos = Productos.objects.filter(IDProducto__isnull=False, IDProducto__gt='')
    return render(request, 'productos/productos_list.html', {'productos': productos})

# Vista para crear un nuevo producto
def producto_new(request):
    if request.method == "POST":
        form = ProductoForm(request.POST)
        if form.is_valid():
            producto = form.save()
            return redirect('productos_list')  # Redirigir a la lista de productos después de crear
        else:
            print("Errores en el formulario:", form.errors)  # Imprime los errores en la consola para depurar
    else:
        form = ProductoForm()
    return render(request, 'productos/productos_create.html', {'form': form})

# Vista para editar un producto existente
def producto_edit(request, pk):
    producto = get_object_or_404(Productos, pk=pk)
    if request.method == "POST":
        form = ProductoForm(request.POST, instance=producto)
        if form.is_valid():
            producto = form.save()
            return redirect('productos_list')  # Redirigir a la lista de productos después de editar
    else:
        form = ProductoForm(instance=producto)
    return render(request, 'productos/productos_update.html', {'form': form})

# Vista para eliminar un producto
def producto_delete(request, pk):
    producto = get_object_or_404(Productos, pk=pk)
    if request.method == "POST":
        producto.delete()
        return redirect('productos_list')  # Redirigir a la lista de productos después de eliminar
    return render(request, 'productos/productos_delete.html', {'producto': producto})

# Vistas para Pedidos

# Vista para listar pedidos
def pedidos_list(request):
    pedidos = Pedidos.objects.all()
    return render(request, 'pedidos/pedidos_list.html', {'pedidos': pedidos})

# Vista para crear un nuevo pedido
def pedido_new(request):
    if request.method == "POST":
        form = PedidoForm(request.POST)
        if form.is_valid():
            pedido = form.save()
            return redirect('pedidos_list')  # Redirigir a la lista de pedidos después de crear
    else:
        form = PedidoForm()
    return render(request, 'pedidos/pedidos_create.html', {'form': form})

# Vista para editar un pedido existente
def pedido_edit(request, pk):
    pedido = get_object_or_404(Pedidos, pk=pk)
    if request.method == "POST":
        form = PedidoForm(request.POST, instance=pedido)
        if form.is_valid():
            pedido = form.save()
            return redirect('pedidos_list')  # Redirigir a la lista de pedidos después de editar
    else:
        form = PedidoForm(instance=pedido)
    return render(request, 'pedidos/pedidos_update.html', {'formulario': form})

# Vista para eliminar un pedido
def pedido_delete(request, pk):
    pedido = get_object_or_404(Pedidos, pk=pk)
    if request.method == "POST":
        pedido.delete()
        return redirect('pedidos_list')  # Redirigir a la lista de pedidos después de eliminar
    return render(request, 'pedidos/pedidos_delete.html', {'pedido': pedido})