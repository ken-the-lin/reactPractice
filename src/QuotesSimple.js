import React from 'react';
import { findDOMNode } from 'react-dom'
import { HomeButton } from './HomeButton';
import { Button } from 'react-bootstrap';
import { List } from './List';

class QuotesSimple extends React.Component {
    constructor(props){
        super(props);
        //dummy data
        this.state = {
            quoteList: ['Like', 'Love', 'UCSD']
        }
        this.onAddQuote = this.onAddQuote.bind(this);
    }

    onAddQuote(event){
        console.log('add button clicked');
        //add the quote to this.state.quoteList, and then empty the text field
        //1 : find the node and get the text
        const newQuote = findDOMNode(this.textfield).value;
        console.log('new quote', newQuote);
        //2: add it to the component's state
        this.state.quoteList.push(newQuote);
        //3: set state of the component, which will automatically call render() again
        this.setState({
            quoteList: this.state.quoteList
        });
        //3. empty textfield
        findDOMNode(this.textfield).value = '';
    }

    render(){
        return (
            <div>
              <input type="text" placeholder="Enter text" ref={(node) => this.textfield = node}/>
              <Button onClick={this.onAddQuote}>Add</Button>
              <HomeButton/>
              <List data={this.state.quoteList}/>
            </div>
        )
    }
}

export { QuotesSimple };