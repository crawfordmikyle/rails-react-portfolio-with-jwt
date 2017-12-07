import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from './main/MainPage'
import MainAdmin from './admin/MainAdmin'
import MainBlog from './blog/MainBlog'

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