import React from 'react';
import { Link } from 'react-router'

class HomeButton extends React.Component {
    render(){
        return (
            <Link className='btn btn-info' to='/'>Home</Link>
        )
    }
}

export { HomeButton };