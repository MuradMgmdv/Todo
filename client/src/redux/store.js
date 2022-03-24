import { applyMiddleware, createStore } from 'redux';
import initState from './initState'
import rootReducer from './reducer/rootReducer'
import thunk from 'redux-thunk'

const store = createStore(rootReducer, initState, applyMiddleware(thunk))

export default store
