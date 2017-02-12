import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

//  usage of List
// <List data={this.state.quoteList}
class List extends React.Component {
    constructor(props){
        super(props);
        this.transformDataToListItem = this.transformDataToListItem.bind(this);
    }

    transformDataToListItem(){
        const transformedList = this.props.data.map((item, index) => {
            return <ListGroupItem key={index}> {item} </ListGroupItem>
        })
        return transformedList;
    }

    render(){
        return (
          <ListGroup>
            {this.transformDataToListItem()}
          </ListGroup>
        )
    }
}

List.propTypes = {
    data: React.PropTypes.array.isRequired
}

export { List };