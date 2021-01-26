import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import category from '../store/reducers/category'


const rootReducer = combineReducers({
    category: category
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store