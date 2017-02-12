import React from 'react';
import { HomeButton } from './HomeButton';

class QuotesWithState extends React.Component {
    render(){
        return (
            <div>
                Quotes with State Page
                <HomeButton/>
            </div>
        )
    }
}

export { QuotesWithState };