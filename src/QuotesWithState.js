import React from 'react';
import { findDOMNode } from 'react-dom'
import { HomeButton } from './HomeButton';
import { Button } from 'react-bootstrap';
import { List } from './List';
import { connect } from 'react-redux';

//we don't want to use this.state 
//we use Redux to manage the stage for us
//

class QuotesWithStateNotAwareOfState extends React.Component {
    constructor(props){
        super(props);
        this.onAddQuote = this.onAddQuote.bind(this);
    }

    onAddQuote(event){
        //add the quote to this.state.quoteList, and then empty the text field
        //1 : find the node and get the text
        const newQuote = findDOMNode(this.textfield).value;
        //2: add it to the component's state
        const { dispatch } = this.props; //get the dispatch function
            //DEEP copy the current data array 
        var listData = this.props.quoteList.slice(0);
            //update the list by adding new quote
        listData.push(newQuote); 
        //construct a new state
        const addStateAction = {
            type: 'add',
            state: {
                quoteList: listData
            }
        }
        //dispatch action
        dispatch(addStateAction);
        //3. empty textfield
        findDOMNode(this.textfield).value = '';
    }

    render(){
        return (
            <div>
              <input type="text" placeholder="Enter text" ref={(node) => this.textfield = node}/>
              <Button onClick={this.onAddQuote}>Add</Button>
              <HomeButton/>
              <List data={this.props.quoteList}/>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        quoteList: state.AddReducer.quoteList
    }
}

const QuotesWithState = connect(mapStateToProps)(QuotesWithStateNotAwareOfState);

export { QuotesWithState };