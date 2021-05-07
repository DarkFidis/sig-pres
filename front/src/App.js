import React, { PureComponent } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';

import Near from './container/Near/Near.container'
import Path from './container/Path/Path.container'

class App extends PureComponent {

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/near/:city" component={Near}></Route>
          <Route path="/path" component={Path}></Route>
          <Route path="/" component={Near}></Route>
        </Switch>
      </Router>
    )
  }
}

export default App;
