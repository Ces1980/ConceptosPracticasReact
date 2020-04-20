import React, {Component} from "react";

class App extends Component {

  handleClick(e){
console.log(e)
console.log(e.nativeEvent)

    alert('Hi here!')
  }
  render(){

    return(
      <div className= "App">
        <h4>Eventos</h4>
       <button onClick={this.handleClick}>Hi here!</button>
      </div>
    );
  }
}

export default App;

/* en React tenemos un sistema de eventos sintéticos que 
usaremos como si fueran normales. Aunque están diseñados 
para que pasen por eventos regulares, igual que JSX pasa
por etiquetas HTML normales, cabe destacar que son una capa 
que nos proporciona React y que no son eventos reales del DOM, 
y por eso se llaman sintéticos. */