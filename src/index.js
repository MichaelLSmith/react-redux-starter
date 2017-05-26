import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import reducers from './reducers'
import { loadState, saveState } from './helpers/localStorage'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css'

const persistedState = loadState()

const store = createStore(
  reducers,
  persistedState
//applyMiddleware
)

store.subscribe(() => {
  saveState(store.getState())
})
console.log(store.getState())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'))
registerServiceWorker()
