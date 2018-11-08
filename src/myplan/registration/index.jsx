


import React from 'react'

import SemanticExample from './comps/semantic'
import BootstrapExample from './comps/bootstrap'

import './registration.scss';

class Registration extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {


    return (<div>

    <SemanticExample />

    <br/><hr/><br/>

    <BootstrapExample />


    </div>);
  }
}
export default Registration
