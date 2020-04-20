import React, { Component } from "react";

class App extends Component {
  constructor() {
    super()
    this.state = { mouseX: 0, mouseY: 0 }
    //this.handleMouseMove = this.handleMouseMove.bind(this)
  }

  handleMouseMove=(e) => {
    const {clientX, clientY} = e
    this.setState({mouseX: clientX, mouseY: clientY})
  }

  handleClick(e) {
    console.log(e)
    console.log(e.nativeEvent)
    alert('Hi here!')
  }
  render() {

    return (
      <div className="App">
        <h4>Eventos</h4>
        <button onClick={this.handleClick}>Hi here!</button>
        <div
        onMouseMove={this.handleMouseMove}
          style={{ border: '1px solid red', marginTop: 10, padding: 10 }}>
          <p>{this.state.mouseX},{this.state.mouseY}</p>
        </div>
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