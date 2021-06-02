import React from 'react'
import Home from './screens/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path='/' component={Home} exact />
        </Switch>
      </div>
    </Router>
  )
}

export default App
