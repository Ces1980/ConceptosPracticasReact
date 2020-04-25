import React, { Component } from 'react'

class Render extends Component {
    constructor(props) {
        console.log('constructor')
        super(props)
        this.state = { mensaje: 'mensaje inicial' }
    }

    componentWillMount() {
        console.log('componentWillMount')

    }

    render() {
        console.log('render')
        return 'Soy el método Render'

    }
}

export default Render