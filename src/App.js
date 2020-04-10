import React, {Component} from "react";


class Contador extends Component{
 state = {contador: 0}
  render(){
  return(
      <div>
        <h2>El contador esta a {this.state.contador}</h2>
      </div>
  ) 
  }
}

class App extends Component{
  render(){
    return (
      <div className="App">
        <p>Primer componente con state</p>
        <Contador></Contador>
      </div>
    )
  }
}

export default App;
