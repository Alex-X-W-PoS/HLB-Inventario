import React from 'react';
import ReactDOM from 'react-dom';

const { Component } = React;
const { Provider } = ReactRedux;
const {
  createStore,
  applyMiddleware
} = Redux;
const {
  Field,
  Control,
  Form,
  combineForms
} = ReactReduxForm;
const thunk = ReduxThunk.default;
const logger = reduxLogger();

const initialUserState = {
  nombreMed: '',
  canti: '',
};

const store = createStore(combineForms({
  user: initialUserState,
}), applyMiddleware(thunk));

class UserForm extends Component {
  render() {
    return (
      <Form model="user" onSubmit={v => console.log(v)}>
        <div className="field">
          <label>Nombre de medicina:</label>
          <Control.text model=".nombreMed" />
        </div>

        <div className="field">
          <label>Cantidad:</label>
          <Control.text model=".canti" />
        </div>

        <div className="field">
          <label>Unidad de Medida:</label>
          <Control.select model=".uniMed">
            <option></option>
            <option value="ff0000">ml</option>
            <option value="00ff00">mg</option>
            <option value="0000ff">cajas</option>
          </Control.select>
        </div>
        
        <div className="field">
          <label>Proveedor:</label>
          <Control.text model=".proveedor" />
        </div>

        <div className="field">
          <label>Lote:</label>
          <Control.text model=".lote" />
        </div>


        <div className="field">
          <label>Fecha de Expiracion:</label>
          <Control.text model=".fExp" />
        </div>

        <div className="field">
          <label>Costo:</label>
          <Control.text model=".costo" />
        </div>

                        
        
        
        <div className="field">
          <label>Observaciones:</label>
          <Control.textarea model=".notes" />
        </div>
        
        <button type="submit">
          Ingresar
        </button>
        
        <Control.reset model="user" type="reset">
          Reset
        </Control.reset>
      </Form>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <UserForm />
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));