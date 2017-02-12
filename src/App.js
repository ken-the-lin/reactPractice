import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button bsStyle='danger'>Go To Quote Simple</Button> 
        <br/>
        <Button bsStyle='danger'>Go To Quote With State</Button>        
        <br/>
        <Button bsStyle='danger'>Go To Quote With Firebase</Button>
      </div>
    );
  }
}

export default App;