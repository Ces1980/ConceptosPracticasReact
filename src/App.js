import React, {Component} from "react";


class Contador extends Component{
constructor(props){
  super(props)
  this.state = {contador: this.props.contadorInicial }
  setInterval(() => {
    this.setState({contador: this.state.contador + 1})
  },1000)
}
  render(){
  return <ContadorNumero numero={this.state.contador}></ContadorNumero>
  }
}

Contador.defaultProps = {
contadorInicial: 0
}

class ContadorNumero extends Component{
  render(){
    console.log('ContadorNumero render()')
  return <span>{this.props.numero}</span>
  }
}

class App extends Component{
  render(){
    return(
      <div className="App">
          <p>Propagando el state de nuestros componentes</p>
          <Contador contadorInicial={100}></Contador>
      </div>
    )
  }
}

export default App;
