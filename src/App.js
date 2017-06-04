import React, { Component } from 'react';
import Button from './button';

class App extends Component {
  render() {
    const ButtonsList = [];
    for (var i = 0; i < 10; i++) {
      const x = i;
      ButtonsList.push(<Button key={x} name={x}/>);
    }
    return (
      <div className="App">
        <div className="App-header"> </div>
        <div className="Calculator-input">
          <input type="text" id="screen"></input>
        </div>
        { /*probably put this inside a table*/ }
        <div className="Calculator-buttons">
          <table>
            <tbody>
              <tr>
                <td><Button name="7"/></td>
                <td><Button name="8"/></td>
                <td><Button name="9"/></td>
              </tr>
              <tr>
                <td><Button name="4"/></td>
                <td><Button name="5"/></td>
                <td><Button name="6"/></td>
              </tr>
              <tr>
                <td><Button name="1"/></td>
                <td><Button name="2"/></td>
                <td><Button name="3"/></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
