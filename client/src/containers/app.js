import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from './MainPage'
import MainAdmin from './MainAdmin'
import MainBlog from './MainBlog'

class App extends Component{
  render(){
    return(
      <Router>
        <div className="container main">
        <Switch>
          <Route exact path="/" component={MainPage}/>
          <Route exact path="/blog" component={MainBlog}/>
          <Route exact path="/admin" component={MainAdmin}/>
        </Switch>
        </div>
      </Router>
    )
  }
}

export default App