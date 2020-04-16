/* El renderizado condicional en React funciona de la misma 
forma que lo hacen las condiciones en JavaScript. 
Usa operadores de JavaScript como if o el operador condicional 
para crear elementos representando el estado actual, y deja que 
React actualice la interfaz de usuario para emparejarlos. */
import React, {Component} from 'react';


class LoginButton extends Component{
    render(){
        return <button>Iniciar Sesión</button>
    }
}

class LogoutButton extends Component{
    render(){
        return <div>
            <p>Bienvenido ,usuario</p>
            <button>Cerrar Sesión</button>
        </div>
    }
}


export default class CondicionalSection extends Component{
    constructor(){
        super()
        this.state= {isUserLogged: false}
    }
    render(){
        return(
            <div>
                <h4>Condicional Rendering</h4>
                {this.state.isUserLogged ? <LogoutButton/> : <LoginButton/>}
            </div>
        )
    }
}