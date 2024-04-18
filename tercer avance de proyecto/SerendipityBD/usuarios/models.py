from django.db import models

class Usuarios(models.Model):
    IDUsuario = models.CharField(primary_key=True, max_length=10)
    NombreUsuario = models.CharField(max_length=100)
    CorreoElectronico = models.CharField(max_length=100)
    Contrasena = models.CharField(max_length=100)

    def __str__(self):
        return self.IDUsuario

class Categorias(models.Model):
    IDCategoria = models.AutoField(primary_key=True)
    NombreCategoria = models.CharField(max_length=100)
    DescripcionCategoria = models.TextField()

    def __str__(self):
        return self.NombreCategoria

class Productos(models.Model):
    IDProducto = models.CharField(primary_key=True, max_length=10)
    NombreProducto = models.CharField(max_length=100)
    Descripcion = models.TextField()
    Precio = models.DecimalField(max_digits=10, decimal_places=2)
    IDCategoria = models.ForeignKey(Categorias, on_delete=models.CASCADE)

    def __str__(self):
        return self.NombreProducto

class Pedidos(models.Model):
    IDPedido = models.AutoField(primary_key=True)
    IDUsuario = models.ForeignKey(Usuarios, on_delete=models.CASCADE)
    FechaPedido = models.DateField()
    EstadoPedido = models.CharField(max_length=50)
    TotalPedido = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f"Pedido {self.IDPedido} de {self.IDUsuario}"
