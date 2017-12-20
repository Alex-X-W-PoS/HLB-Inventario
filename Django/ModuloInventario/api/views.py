from django.shortcuts import render
from django.db import transaction
from django.shortcuts import render, get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from inventario.models import Inventario, InventarioF
from .serializers import InventarioSerializer, InventarioFSerializer
from rest_framework.viewsets import ModelViewSet

class InventarioView(ModelViewSet):
    queryset = Inventario.objects.all()
    serializer_class = InventarioSerializer

class InventarioFView(ModelViewSet):
    queryset = InventarioF.objects.all()
    serializer_class = InventarioFSerializer

class ListarInventarioFarmacia(APIView):
    def get(self, request):
        lista=InventarioF.objects.all()
        response=InventarioFSerializer(lista, many=True)
        return Response(response.data or None)

class ListarInventario(APIView):
    def get(self, request):
        lista=Inventario.objects.all()
        response=InventarioSerializer(lista, many=True)
        return Response(response.data or None)

class CrearMedicina(APIView):
    @transaction.atomic
    def post(self, request):
        try:
            with transaction.atomic():

                medicina = Inventario()
                medicina.nombre = request.data['nombre']
                medicina.cantidad = request.data['cantidad']
                medicina.unidad = request.data['unidad']
                medicina.proveedor = request.data['proveedor']
                medicina.lote = request.data['lote']
                medicina.factura = request.data['factura']
                medicina.fecha_exp = request.data['fecha_exp']
                medicina.costo = request.data['costo']
                medicina.save()
                return Response({"Mensaje":"Medicina Agregada al inventario exitosamente"})

        except:

            return Response({"Mensaje":"Se produjo un Error, no se ha podido almacenar la medicina"}, status=500)


class EliminarMedicina(APIView):
    @transaction.atomic
    def post(self,request):
        id=request.data['id']
        entry = get_object_or_404(Inventario, id=id)
        try:
            entry.delete()
            return Response({"Mensaje":"Se ha eliminado el registro exitosamente"})

        except:

            return Response({"Mensaje":"Se ha producido un error"}, status=500)

class ModificarMedicina(APIView):
    @transaction.atomic
    def post(selfself, request):
        try:
            with transaction.atomic():

                registro=Inventario.object.get(id=request.data['id'])
                registro.nombre = request.data['nombre']
                registro.cantidad = request.data['cantidad']
                registro.unidad = request.data['unidad']
                registro.proveedor = request.data['proveedor']
                registro.lote = request.data['lote']
                registro.factura = request.data['factura']
                registro.fecha_exp = request.data['fecha']
                registro.costo = request.data['costo']
                registro.save()
                return Response({"Mensaje": "Medicina Modificada exitosamente"})
        except:
            return Response({"Mensaje": "Se produjo un Error, no se ha podido modificar la medicina"}, status=500)


def guardarInventario(request):
    try:
        medicina = Inventario()
        medicina.nombre = request.data['nombre']
        medicina.cantidad = request.data['cantidad']
        medicina.unidad = request.data['unidad']
        medicina.proveedor = request.data['proveedor']
        medicina.lote = request.data['lote']
        medicina.factura = request.data['factura']
        medicina.fecha_exp = request.data['fecha']
        medicina.costo = request.data['costo']
        medicina.save()
        return True
    except:
        return False

