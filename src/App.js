import React, {Component} from "react";
import cars from './data/cars.json';


class App extends Component {

  render(){

    return(
      <div className= "App">
        <h4>Trabajando con listas de objetos</h4>
        <ul>
          {
            cars.map( car=> {
              return(
                <li key={car.id}> 
                  <p><strong>Nombre: </strong>{car.name}</p>
                  <p><strong>Compañia: </strong>{car.company}</p>
                </li>
              )
            })
          }
        </ul>
      </div>
    );
  }
}

export default App;