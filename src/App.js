import React, {Component} from "react";


class Title extends Component{
  render(){
  return <h1>{this.props.text}</h1>
  }
}

//Mensaje por default
Title.defaultProps={
  text:"Titulo por defecto"
}

class App extends Component{
  render(){
    return (
      <div className="App">
        <Title text="Otro titulo desde las props"></Title>
      </div>
    )
  }
}

export default App;
