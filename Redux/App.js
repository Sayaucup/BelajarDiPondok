import React from 'react'
import Route from './src/routes/route'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux' 
import Reduce from './src/redux/reduce'
import Thunk from 'redux-thunk'

class App extends React.Component{
  render(){
  return(
    <Provider store={createStore(Reduce,{}, applyMiddleware(Thunk))}>
      <Route/>
    </Provider>
  )
}
}
export default App