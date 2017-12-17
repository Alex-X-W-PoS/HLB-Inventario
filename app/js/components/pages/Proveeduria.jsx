import React from 'react';
import { Link } from 'react-router';

export default class Proveeduria extends React.Component {
	render(){
		return(
			<div>
				<h1>Bodega de Proveeduria</h1>
				<h2>Escoja la operacion a realizar:</h2>
				<Link to="/proveeduria/agregarinventario"><button className="btn">Agregar Medicina a Bodega</button></Link>
				<Link to="/notimplementedyet"><button className="btn">Ingresar Nueva Medicina</button></Link>
				<Link to="/proveeduria/listarmedicina"><button className="btn">Listar Medicina</button></Link>

			</div>
			);
	}
}