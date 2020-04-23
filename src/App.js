import React, { Component } from "react";




class App extends Component {

  /* Constructor por defecto
  constructor(...args) {
    super(...args)
  } */

  constructor(props) {
    console.log('Constructor...')
    super(props)//Este método llama al constructor de Component
    //Inicializamos el state de nuestro componente
    this.state = { mensajeInicial: 'mensaje inicial: ' }
    // bineamos para enlazar el contexto correcto al método
    this.handlerClick = this.handlerClick.bind(this)
  }

  /* Con arrow funtion tambien se puede enlazar al contexto correcto */
  handlerClick() {
    this.setState({ mensajeInicial: 'mensaje cambiado:  ' })
  }
  render() {
    console.log('render...')
    return (
      <div className="App">
        <h3>Ciclo de montaje: constructor</h3>
        {this.state.mensajeInicial}
        <button onClick={this.handlerClick}>
          Cambiar mensaje
        </button>
      </div>
    );
  }
}

export default App;
