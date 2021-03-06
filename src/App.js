import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.scss';

import MyPlan from './boilerplate/MyPlan';

import Courses from './myplan/pages/Courses'
import Programs from './myplan/pages/Programs'

import Current from './myplan/pages/Current'
import Previous from './myplan/pages/Previous'
import Preview from './myplan/pages/Preview'
import Future from './myplan/pages/Future'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loggedIn: "billy",
    };
  }

  render() {
    return (<div>

      <MyPlan>
        <Router>
          <Switch>
            <Route exact={true} path="/" component={() => <Current netid={this.state.loggedIn} />} />
            <Route path="/previous" component={Previous} />
            <Route path="/preview" component={Preview} />
            <Route path="/future" component={Future} />
            <Route path="/programs" component={Programs} />
            <Route path="/courses" component={Courses} />
          </Switch>
        </Router>
      </MyPlan>

    </div>);
  }
}

export default App
