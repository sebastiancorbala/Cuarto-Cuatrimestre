from django.shortcuts import render


def inicio(request):
    return render(request, 'paginas/inicio.html')

def categoria_list(request):
    # Corrige el error aquí: utiliza "Categorias.objects.all()" en lugar de "categorias.objects.all()"
    categorias = categorias.objects.all()
    return render(request, 'categorias/categoria_list.html', {'categorias': categorias})