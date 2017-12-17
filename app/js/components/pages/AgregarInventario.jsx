import React from 'react';

import { Link } from 'react-router';

import axios from 'axios';

axios.defaults.xsrfHeaderName = "X-CSRFToken";

export default class AgregarInventario extends React.Component {

	miFuncion(e){
		e.preventDefault();
		const nombred = document.getElementById('nombre').value;
		const cantidadd = document.getElementById('cantidad').value;
		const selecciond= document.getElementById('unidad');
		const unidadd = selecciond.options[selecciond.selectedIndex].value;
		const proveedord = document.getElementById('proveedor').value;
		const loted = document.getElementById('lote').value;
		const facturad = document.getElementById('factura').value;
		const fecha_expd = document.getElementById('fecha_exp').value;
		const costod = document.getElementById('costo').value;
		var params = new URLSearchParams();
		params.append('nombre',nombred);
		params.append('cantidad',cantidadd);
		params.append('unidad',unidadd);
		params.append('proveedor',proveedord);
		params.append('lote',loted);
		params.append('factura',facturad);
		params.append('fecha_exp',fecha_expd);
		params.append('costo',costod);
		axios.post('http://localhost:8000/api/inventario/',params)
		.then(function(response){
			alert("success");
		})
		.catch(function(error){
			console.log(error.status);
		});

		
	}

	render(){
		return(
			<div>
				<form onSubmit={this.miFuncion.bind(this)} id="invform">
					<label htmlFor="nombre">Nombre:</label>
					<input className="block-element" type="text" name="nombre" id="nombre" />
					<label htmlFor="cantidad">Cantidad:</label>
					<input className="block-element" type="number" min ="1" name="cantidad" id="cantidad" />
					<label htmlFor="unidad">Unidad de Medida:</label>
					<select className="block-element" name="unidad" id="unidad">
						<option value="mg">Miligramos</option>
						<option value="ml">Mililitros</option>
						<option value="unidad">Pastilla/Unidad</option>
						<option value="caja">Cajas</option>
					</select>
					<label htmlFor="proveedor">Proveedor:</label>
					<input className="block-element" type="text" name="proveedor" id="proveedor" />
					<label htmlFor="lote">Lote:</label>
					<input className="block-element" type="text" name="lote" id="lote" />
					<label htmlFor="factura">Factura:</label>
					<input className="block-element" type="text" name="factura" id="factura" />
					<label htmlFor="fecha_exp">Fecha de Expiracion:</label>
					<input className="block-element" type="date" name="fecha_exp" id="fecha_exp" />
					<label htmlFor="costo">Costo:</label>
					<input className="block-element" type="number" min ="1" step="any" name="costo" id="costo" />
					<button className="block-element" type="submit">Ingresar</button>
				</form>
			</div>
		);
	}
}