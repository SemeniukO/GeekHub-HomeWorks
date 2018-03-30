import { combineReducers } from 'redux'
import toDoList from './tracks';
import show from './show';
import disableButton from './disableButton'

export default combineReducers({
    toDoList,
    show,
    disableButton
})