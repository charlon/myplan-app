import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.scss';

import Common from './common/Common';
import Courses from './myplan/courses/'
import Home from './myplan/home/'
import Programs from './myplan/programs/'
import Registration from './myplan/registration/'

const App = () => (
  <Common>
    <BrowserRouter>
    <Switch>
      <Route exact={true} path="/" component={Home} />
      <Route path="/programs" component={Programs} />
      <Route path="/courses" component={Courses} />
      <Route path="/registration" component={Registration} />
    </Switch>
    </BrowserRouter>
  </Common>
);

export default App;
