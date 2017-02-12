import { createStore, combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

function AddReducer(currentState={}, action){

    switch (action.type){
        case 'add':
            return Object.assign({}, currentState, action.state);
        default:
            return currentState;
    }
}

const rootReducer = combineReducers({
    routing: routerReducer,
    AddReducer
})

const store = createStore(rootReducer, {});
store.dispatch({
    type:'add',
    state:{
        quoteList: ['Live', 'Love', 'UCSD']
    }
})

export { store }