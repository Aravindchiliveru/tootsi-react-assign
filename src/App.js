import React from 'react'
import Cart from './components/Cart'
import { products } from './components/Products'
import { useState } from 'react'
import './App.css'
import Items from './components/Items'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
function App() {
  return (
    <Router>
        <div className="App">
        <div className="App-header">
          <Switch>
            <Route exact path='/'>
              <Cart />
            </Route>
            <Route path='/checkout'>
              <Items />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>


  )
}

export default App
