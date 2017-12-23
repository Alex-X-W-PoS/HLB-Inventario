import React from 'react';
import { Link } from 'react-router';
import request from 'superagent';

export default class Lista extends React.Component {
	constructor(){
		super();
		this.state = {
			medicinas: [],
		};
		//this.consulta = this.consulta.bind(this);

	}

	componentWillMount(){
		let medicinas;
		request.get('http://localhost:8000/api/inventario/')
		.then(function(response){
			console.log(response.body);
			medicinas = response.body;
			console.log(medicinas);
			this.setState({medicinas: medicinas});
			}.bind(this));
		
		

	}

	render(){
		var listamedicinas = this.state.medicinas.map(function(object){
			return <div><p className="cant">Nombre Medicina: {object.nombre}</p><p>Cantidad: {object.cantidad}</p></div>;
		})
		return(
			<div>
				
				<div>{listamedicinas}</div>
			</div>
			)
		//<button className="block-element" onClick={this.consulta}>Consulta</button>
	}

}