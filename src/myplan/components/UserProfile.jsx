import React from 'react';
import { Card, Image }  from 'react-bootstrap'

import './UserProfile.scss'

class UserProfile extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (<div>

      <Card border='light' className='shadow-sm mb-4'>
        <Card.Img variant="top" src="https://myplan-dev.washington.edu/home/images/6.png" className='mp-user-background' />
        <Card.Body>
          <Image src="https://randomuser.me/api/portraits/lego/1.jpg" roundedCircle className='shadow-sm mp-user' />

          <Card.Title as='h4'>Hello, J. Julius!</Card.Title>
          <Card.Text>
            <p>Class:<br/>Freshman</p>
            <p>Intended Major:<br/>Bachelor of Arts Business</p>
          </Card.Text>
          <Card.Link href="#">View Academic History (audit)</Card.Link>
        </Card.Body>
      </Card>

    </div>);
  }
}
export default UserProfile
