import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.scss';

import Common from './common/Common';
import Courses from './myplan/courses/'
import Programs from './myplan/programs/'

import Current from './myplan/current/'
import Preview from './myplan/preview/'

const App = () => (
  <Common>
    <BrowserRouter>
    <Switch>
      <Route exact={true} path="/" component={Current} />
      <Route path="/programs" component={Programs} />
      <Route path="/courses" component={Courses} />
      <Route path="/preview" component={Preview} />
    </Switch>
    </BrowserRouter>
  </Common>
);

export default App;
