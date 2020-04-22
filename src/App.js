import React, { Component } from "react";
import PropTypes from 'prop-types'

class Box extends Component {
  render() {
    return (
      <div style={{ border: '1px solid #09f', margin: 5, padding: 5 }}>
        {this.props.children}
      </div>
    )
  }
}

class Article extends Component {
  static propTypes = {
    author: PropTypes.string
  }
  constructor(props) {
    super(props)

    if (typeof props.author === 'undefined') {
      console.warn('author prop is required')
      throw new Error('author prop is requered')
    }
  }
  render() {
    const { author, children, date, title } = this.props;
    return (
      <section>
        <h2>{title}</h2>
        {author && <p><em>Escrito por {author}</em></p>}
        <Box>{date}</Box>
        <article>
          {children}
        </article>
      </section>
    )
  }
}


class App extends Component {

  render() {
    return (
      <div className="App">
        <h3>Children props</h3>
        <Article
          author={true}
          date={new Date().toLocaleDateString()}
          title='Articulo sobre la prop children'
        >
          <p>El contenido lo envolvemos dentro del componente Article
              será enviado al componente this.props.children.</p>
          <strong>Y mantiene las etiquetas que se hayan añadido dentro</strong>
        </Article>

      </div>
    );
  }
}

export default App;
