import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.scss';

import MyPlan from './boilerplate/MyPlan';

import Courses from './myplan/pages/Courses'
import Programs from './myplan/pages/Programs'

import Current from './myplan/current/'
import Previous from './myplan/pages/Previous'
import Preview from './myplan/preview/'
import Future from './myplan/future/'

const App = () => (

  <MyPlan>
    <Router>
      <Switch>
        <Route exact={true} path="/" component={Current} />
        <Route path="/previous" component={Previous} />
        <Route path="/preview" component={Preview} />
        <Route path="/future" component={Future} />
        <Route path="/programs" component={Programs} />
        <Route path="/courses" component={Courses} />
      </Switch>
    </Router>
  </MyPlan>

);

export default App;
