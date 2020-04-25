import React, { Component } from 'react'
import ComponentWillMount from './sections/componentWillMount'



class App extends Component {

  render() {
    return (
      <div className="App">
        <ComponentWillMount />
      </div>
    );
  }
}

export default App;
