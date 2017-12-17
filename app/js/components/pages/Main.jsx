import React from 'react';
import { Link } from 'react-router';

export default class Main extends React.Component {
	render(){
		return(
			<div>
				<h1>Bienvenido Usuario</h1>
				<h2>Escoja la ubicacion de su bodega:</h2>
				<Link to="/proveeduria"><button className="btn">Proveeduria</button></Link>
				<Link to="/notimplementedyet"><button className="btn">Farmacia</button></Link>
				<footer>En la version oficial, esto se valida con las credenciales</footer>
			</div>
			);
	}
}