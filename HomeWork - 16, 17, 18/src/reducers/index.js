import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux';
import toDoList from './tracks';
import show from './show';
import disableButton from './disableButton'

export default combineReducers({
    routing: routerReducer,
    toDoList,
    show,
    disableButton
})