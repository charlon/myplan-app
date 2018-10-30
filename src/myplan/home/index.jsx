import React from 'react';
import {Button, Card, Image, Feed} from 'semantic-ui-react'

import './home.scss';

class Registration extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (<div>

      <Card fluid="fluid">
        <Card.Content>
          <Card.Header>Holds</Card.Header>
        </Card.Content>
        <Card.Content>
          <Feed>
            <Feed.Event>
              <Feed.Label image='/images/avatar/small/jenny.jpg'/>
              <Feed.Content>
                <Feed.Date content='1 day ago'/>
                <Feed.Summary>
                  You added
                  <a>Jenny Hess</a>
                  to your
                  <a>coworker</a>
                  group.
                </Feed.Summary>
              </Feed.Content>
            </Feed.Event>

            <Feed.Event>
              <Feed.Label image='/images/avatar/small/molly.png'/>
              <Feed.Content>
                <Feed.Date content='3 days ago'/>
                <Feed.Summary>
                  You added
                  <a>Molly Malone</a>
                  as a friend.
                </Feed.Summary>
              </Feed.Content>
            </Feed.Event>

            <Feed.Event>
              <Feed.Label image='/images/avatar/small/elliot.jpg'/>
              <Feed.Content>
                <Feed.Date content='4 days ago'/>
                <Feed.Summary>
                  You added
                  <a>Elliot Baker</a>
                  to your
                  <a>musicians</a>
                  group.
                </Feed.Summary>
              </Feed.Content>
            </Feed.Event>
          </Feed>
        </Card.Content>
      </Card>

      <Card fluid>
      
        <Card.Content>
          <Card.Header>Registration</Card.Header>
        </Card.Content>

        <Card.Content>
          <Card.Description>
            <p>Your priority registration date is not yet availble. Priority Registration goes from <strong>Nov. 2. 2018 - Nov. 18, 2018</strong>.</p>
          </Card.Description>
        </Card.Content>

        <Card.Content>
          <Card.Description>
            <p>Your estimated priority registration date is <strong>Nov. 4, 2018</strong>.</p>
          </Card.Description>
        </Card.Content>

        <Card.Content extra="extra">
          Please refer to <a href="">P1 Registration Dates</a> to find out when you can register for classes.
        </Card.Content>

        <Card.Content extra="extra">
          How is your <a href="">P1 Registration Date</a> calculated?
        </Card.Content>

      </Card>

    </div>);
  }
}
export default Registration
