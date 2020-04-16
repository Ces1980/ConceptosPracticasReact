import React, {Component} from "react";
import cars from './data/cars.json';

class CarItem extends Component {
  render(){
    const { car } = this.props
    return(
      <li> 
        <p><strong>Nombre: </strong>{car.name}</p>
        <p><strong>Compañia: </strong>{car.company}</p>
      </li>
    )
  }
}
class App extends Component {

  render(){

    return(
      <div className= "App">
        <h4>Trabajando con listas de objetos</h4>
        <ul>
          {
            cars.map( car=> {
              return <CarItem key={car.id} car={car} />
            })
          }
        </ul>
      </div>
    );
  }
}

export default App;