import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MainPage from './MainPage';
import MainAdmin from './MainAdmin';
import MainBlog from './MainBlog';

import NewProject from './projectForms/NewProject';
import EditProject from './projectForms/EditProject';

import NewBlogPost from './blogForms/NewBlogPost';
import EditBlogPost from './blogForms/EditBlogPost';

class App extends Component{
  render(){
    return(
      <Router>
        <div className="main">
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/blog" component={MainBlog} />
          <Route exact path="/admin" component={MainAdmin} />
          <Route exact path="/admin/projects/new" component={NewProject} />
          <Route exact path="/admin/projects/:id" component={EditProject} />
          <Route exact path="/admin/blog/new" component={NewBlogPost} />
          <Route exact path="/admin/blog/:id" component={EditBlogPost} />
        </Switch>
        </div>
      </Router>
    )
  }
};

export default App;