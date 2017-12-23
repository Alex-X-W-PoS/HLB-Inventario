import React from 'react';
import { Link } from 'react-router';
import request from 'superagent';

export default class Main extends React.Component {
	constructor(){
		super();
		this.state = {
			loc: "",
		}

	}

	componentWillMount(){
		request.get('http://localhost:8080/openmrs/ws/rest/v1/appui/session')
		.then(function(response,err){
			if(err){
				alert(err.status);
			}
			else{
				var loc = response.body.sessionLocation.name;
				console.log(loc);
				if(loc.localeCompare("Proveeduria")==0){
					console.log("HERE");
					this.props.router.replace("/proveeduria");
				}
				else{
					this.props.router.replace("/notimplementedyet");
				}
			}
		}.bind(this));
	}


	render(){
		var loc = this.state.loc;
		console.log(this.state.loc);
		

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