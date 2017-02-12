import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button bsStyle='danger'>Go To Up</Button> 
        <br/>
        <Button bsStyle='danger'>Go To Down</Button>
      </div>
    );
  }
}

export default App;
