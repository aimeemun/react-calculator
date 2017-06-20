import React, { Component } from 'react';
import './App.css';
import Button from './button';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentInput: '',
      previousInput: '',
      addNumbers: false
    };
  };

  updateInputTextField = (value) => {
    this.setState({previousInput: value});
    if (this.state.addNumbers === true) {
      this.setState({previousInput: +value + +this.state.previousInput});
      this.setState({addNumbers: false});
    } else if (this.state.subtractNumbers === true) {
      this.setState({previousInput: +this.state.previousInput - +value});
      this.setState({subtractNumbers: false});
    }
  }

  addNumbers = () => {
    this.setState({addNumbers: true});
  }
  subtractNumbers = () => {
    this.setState({subtractNumbers: true});
  }

  clearField = () => {
    this.setState({previousInput: ''});
  }

  render() {
    return (
      <div className="App">
        <div>
          <div>
            <input type="text" className="Calculator-input" value={this.state.previousInput}>
            </input>
          </div>  
          <div>
            <Button value={1} onClick={this.updateInputTextField}/>
            <Button value={2} onClick={this.updateInputTextField}/>
            <Button value={3} onClick={this.updateInputTextField}/>
          </div>
          <div>
            <Button value={4} onClick={this.updateInputTextField}/>
            <Button value={5} onClick={this.updateInputTextField}/>
            <Button value={6} onClick={this.updateInputTextField}/>
          </div>
          <div>
            <Button value={7} onClick={this.updateInputTextField}/>
            <Button value={8} onClick={this.updateInputTextField}/>
            <Button value={9} onClick={this.updateInputTextField}/>
          </div>
          <div>
            <Button value={'+'} onClick={this.addNumbers}/>
            <Button value={'-'} onClick={this.subtractNumbers}/>
            <Button value={'clear'} onClick={this.clearField}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
