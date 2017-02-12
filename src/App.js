import React, { Component } from 'react';
import { Link } from 'react-router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Link className='btn btn-success' to='/quotes_simple'>Go To Quote Simple</Link> 
        <br/>
        <Link className='btn btn-primary' to='/quotes_with_state'>Go To Quote With State</Link>        
        <br/>
        <Link className='btn btn-warning' to='/quotes_with_firebase'>Go To Quote With Firebase</Link>
      </div>
    );
  }
}

export default App;
