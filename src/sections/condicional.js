/* El renderizado condicional en React funciona de la misma 
forma que lo hacen las condiciones en JavaScript. 
Usa operadores de JavaScript como if o el operador condicional 
para crear elementos representando el estado actual, y deja que 
React actualice la interfaz de usuario para emparejarlos. */
import React, {Component} from 'react';


class ComponenteA extends Component{
    render(){
        return <p>Componente A</p>
    }
}

class ComponenteB extends Component{
    render(){
        return <p>Componente B</p>
    }
}

function useCondicionalRendering (mostrarA){

    if (mostrarA) {
        return <ComponenteA/>
    }
    return <ComponenteB/>
}

export default class CondicionalSection extends Component{
    constructor(){
        super()
        this.state= {mostraA: true}
    }
    render(){
        return(
            <div>
                <h4>Condicional Rendering</h4>
                {useCondicionalRendering(this.state.mostrarA)}
            </div>
        )
    }
}