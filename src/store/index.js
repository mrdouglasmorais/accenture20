import { createStore } from 'redux';

import { INITIAL_STATE } from './initialState';

function getStudents( state = INITIAL_STATE, action ){
    switch (action.type){
        case 'ADD_STUDENT':
            return { ...state, data: [ ...state.data, action.title ] }
        default:
            return state
    }
}

const store = createStore( getStudents )

export default store;