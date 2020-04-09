import React, {Component} from "react";
import logo from "./logo.svg";
import "./App.css";

/* function Hello (props){
return <h2>{props.title}</h2>
} */

/* const Hello = (props) => <h2>{props.title}</h2> */

class Hello extends Component{
  render(){
  return <h2>{this.props.title}</h2>
  }
}

class Text extends Component{
   render(){
     const textoSegunBool = this.props.isActivated ? 'Es cierto!' : 'Falso'
     const mappedNumbers = this.props.arrayOfNumbers.map(n => n * 2)
   return (
     <div>
          <p>{this.props.objectWithInfo.key}</p>
          <p>{this.props.objectWithInfo.key2}</p>
          <p>{this.props.text}</p>
          <p>{this.props.number}</p>
          <p>{textoSegunBool}</p>
          <p>{this.props.arrayOfNumbers.join(', ')}</p>
          <p>Arrelo manipulado antes de usarlo: {mappedNumbers.join(', ')}</p>
     </div>
  )
   }
  }

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
         <Hello title="Hola desde una prop"></Hello>
         <Text 
         arrayOfNumbers={[2,5,8]}
         isActivated
         objectWithInfo={{key: 'value', key2:'value2', key3:'value3'}}
         number={2} 
         text='Texto en String' 
         ></Text>
      </header>{" "}
    </div>
  );
}

export default App;
