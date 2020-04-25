/* El método render es el único obligatorio en nuestro componente
Retoma los elementos que queremos mostrar en la interfaaz
No se debe llamar a setState, provocaría un loop infinito */
import React, { Component } from 'react'
import Render from './sections/componentWillMount'



class App extends Component {

  render() {
    return (
      <div className="App">
        <Render />
      </div>
    );
  }
}

export default App;
