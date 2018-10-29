import React from 'react';
import {Button, Card, Image} from 'semantic-ui-react'

import './home.scss';

class Registration extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (<div>

       <Card>
         <Card.Content>
           <Card.Header>Registration</Card.Header>
           <Card.Meta>Your priority registration date is not yet availble. Priority Registration goes from <strong>Nov. 2. 2018 - Nov. 18, 2018</strong></Card.Meta>
           <Card.Description>Please refer to the <a href="">P1 Registration Dates</a> to find out when you can register for classes.</Card.Description>
         </Card.Content>
       </Card>

       <Card>
         <Card.Content>
           <Card.Header>Registration</Card.Header>
           <Card.Meta>Your estimated Priority Registration date is <strong>Nov. 4. 2018 @ 6:00AM</strong></Card.Meta>
           <Card.Description>How is you <a href="">P1 Registration Dates</a> calculated?</Card.Description>
         </Card.Content>
       </Card>

    </div>);
  }
}
export default Registration
