/* El método render es el único obligatorio en nuestro componente
Retoma los elementos que queremos mostrar en la interfaaz
No se debe llamar a setState, provocaría un loop infinito */
import React, { Component } from 'react'
import EjemploDeComponentDidMount from './sections/ComponentDidMount'



class App extends Component {

  render() {
    return (
      <div className="App">
        <EjemploDeComponentDidMount />
      </div>
    );
  }
}

export default App;
