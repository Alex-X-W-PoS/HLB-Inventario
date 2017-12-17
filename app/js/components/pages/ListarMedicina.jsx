import React from 'react';
import { Link } from 'react-router';
import request from 'superagent';
import Lista from './Lista'

export default class ListarMedicina extends React.Component {

	render(){
		return(
			<div>
			<Lista />
			</div>
			)
	}

}