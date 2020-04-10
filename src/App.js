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
//Destructuración
class Text extends Component{
   render(){
     const {
       arrayOfNumbers, 
       isActivated,
       multiply,
       number,
       objectWithInfo, 
       text, 
       title
      } = this.props

     const textoSegunBool = isActivated ? 'Es cierto!' : 'Falso'
     const mappedNumbers = arrayOfNumbers.map(multiply)

     /**Uso de las props */
   return (
     <div>
          {title}
          <p>{objectWithInfo.key}</p>
          <p>{objectWithInfo.key2}</p>
          <p>{text}</p>
          <p>{number}</p>
          <p>{textoSegunBool}</p>
          <p>{arrayOfNumbers.join(', ')}</p>
          <p>Arreglo manipulado antes de usarlo: {mappedNumbers.join(', ')}</p>
     </div>
  )
   }
  }


  /**Declaración de las props con su contenido */
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
         multiply={(number) => number * 4}
         number={2} 
         text='Texto en String' 
         //Uso de las prop ya con un elemento html desde su declaración
         title={<h1>Este es el titulo</h1>}
         ></Text>
      </header>{" "}
    </div>
  );
}

export default App;
