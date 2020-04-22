import React, { Component } from "react";

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
  render() {
    return (
      <section>
        <h2>{this.props.title}</h2>
        <p><em>Escrito por {this.props.author}</em></p>
        <Box>{this.props.date}</Box>
        <article>
          {this.props.children}
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
          author='César'
          date={new Date().toLocaleDateString()}
          title='Articulo sobre la prop children'
        >
          <p>El contenido lo envolvemos dentro del componente Article
              será enviado al componente this.props.children.</p>
          <strong>Y mantiene las etiquetas que se hayan añadido dentro</strong>
        </Article>

        <Article
          author='César'
          date={new Date().toLocaleDateString()}
          title='Articulo 2'
        >
          <p>El contenido lo envolvemos dentro del componente Article
              será enviado al componente this.props.children.</p>
          <strong>Y mantiene las etiquetas que se hayan añadido dentro</strong>
        </Article>

        <Article
          author='César'
          date={new Date().toLocaleDateString()}
          title='Otro Articulo'
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
