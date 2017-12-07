const fields = [{
  name: 'nombreMed',
  label: 'Nombre medicina',
  placeholder: 'Ingrese el nombre de la medicina',
  rules: 'required|string|between:5,25',
}, {
  name: 'cantidad',
  label: 'Cantidad',
  placeholder: 'Ingrese cantidad ',
  rules: 'required|digits:10',
}, {
  name: 'prov',
  label: 'Proveedor',
  placeholder: 'Ingrese Proveedor',
  rules: 'required|string|between:5,25',
}, {
  name: 'lote',
  label: 'Lote',
  placeholder: 'Ingrese # de lote',
  rules: 'required|digits:10',
},{
  name: 'fechaExp',
  label: 'Fecha de Expiracion',
  placeholder: 'Ingrese fecha de expiracion',
  rules: 'required|date',
},{

  name: 'costo',
  label: 'Costo',
  placeholder: 'Ingrese Costo ',
  rules: 'required|numeric',
}
}];
