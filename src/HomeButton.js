import React from 'react';
import { Link } from 'react-router'

//Dummy Component that takes user back to home page
class HomeButton extends React.Component {
    render(){
        return (
            <Link className='btn btn-info' to='/'>Home</Link>
        )
    }
}

export { HomeButton };