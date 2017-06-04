import React, { Component } from 'react';

export default class Button extends Component {
  printConsole(name) {
    console.log(name);
  }

  render() {
  const name = this.props.name;
    return (
      <button type="button" onClick={
        () => { this.printConsole(name) }
      }> {name} </button>
    );
  }
}
