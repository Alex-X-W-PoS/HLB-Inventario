import React from 'react';
import { Link } from 'react-router';


export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Lo sentimos, esto no esta implementado todavia</h1>
        <Link to="/"><button className="btn">Pagina Principal</button></Link>
      </div>
    );
  }
}

