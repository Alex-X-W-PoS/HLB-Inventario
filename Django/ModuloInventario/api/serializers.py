from rest_framework import serializers
from inventario.models import Inventario, InventarioF, InventarioECUH

class InventarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Inventario
        fields = '__all__'

class InventarioFSerializer(serializers.ModelSerializer):
    class Meta:
        model = InventarioF
        fields = '__all__'

class InventarioECUHSerializer(serializers.ModelSerializer):
    class Meta:
        model = InventarioECUH
        fields = '__all__'