import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from './MainPage'
import MainAdmin from './MainAdmin'
import MainBlog from './MainBlog'
import EditProject from './projectForms/EditProject'
import NewProject from './projectForms/NewProject'

class App extends Component{
  render(){
    return(
      <Router>
        <div className="container main">
        <Switch>
          <Route exact path="/" component={MainPage}/>
          <Route exact path="/blog" component={MainBlog}/>
          <Route exact path="/admin" component={MainAdmin}/>
          <Route path="/admin/projects/:id" component={EditProject}/>
          <Route path="/admin/projects/new" component={NewProject}/>
        </Switch>
        </div>
      </Router>
    )
  }
}

export default App