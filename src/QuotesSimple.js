import React from 'react';
import { HomeButton } from './HomeButton';

class QuotesSimple extends React.Component {
    render(){
        return (
            <div>
                Simple Quotes Page
                <HomeButton/>
            </div>
        )
    }
}

export { QuotesSimple };