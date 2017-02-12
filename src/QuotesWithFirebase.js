import React from 'react';
import { HomeButton } from './HomeButton';

class QuotesWithFirebase extends React.Component {
    render(){
        return (
            <div>
                Quotes With Firebase Page
                <HomeButton/>
            </div>
        )
    }
}

export { QuotesWithFirebase };