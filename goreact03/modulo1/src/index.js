import React, { Fragment, Component } from "react";
import { render } from "react-dom";
import PropTypes from "prop-types";

class Button extends Component {
  render() {
    return (
      <a href="" onClick={this.props.onClick}>
        {this.props.children}
      </a>
    );
  }
}

Button.defaultProps = {
  children: "Salvar"
};
Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string
};

class App extends Component {
  handleClick() {
    alert("Botao clicado");
  }

  render() {
    return (
      <Fragment>
        <h1>Hello Rockeatseat</h1>
        <Button
          onClick={() => {
            alert("Button 1");
          }}
        />
        <Button onClick={this.handleClick}>Enviar</Button>
      </Fragment>
    );
  }
}

render(<App />, document.getElementById("app"));
