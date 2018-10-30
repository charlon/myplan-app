import React from 'react';
import {Responsive, Step, Icon, Button, Card, Image, Feed, Grid, Segment, Header} from 'semantic-ui-react'

import './home.scss';

class Registration extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (<div>

      <Header as='h1'>Winter 2019</Header>

      <Responsive maxWidth={768}>
        <Step.Group size="small" unstackable fluid widths={3}>
          <Step active>
            <Step.Content>
              <Step.Title>Preview</Step.Title>
            </Step.Content>
          </Step>

          <Step disabled>
            <Step.Content>
              <Step.Title>Pre-registration</Step.Title>
            </Step.Content>
          </Step>

          <Step disabled>
            <Step.Content>
              <Step.Title>Registration</Step.Title>
            </Step.Content>
          </Step>
        </Step.Group>
      </Responsive>

      <Responsive minWidth={768}>
        <Step.Group size="small" stackable fluid widths={3}>
          <Step active>
            <Icon name='truck' />
            <Step.Content>
              <Step.Title>Preview</Step.Title>
              <Step.Description>Find Courses/Sections when Time Schedule is published. Fix issues or resolve holds.</Step.Description>
            </Step.Content>
          </Step>

          <Step disabled>
            <Step.Content>
              <Step.Title>Pre-registration</Step.Title>
              <Step.Description>Complete acknowledgements and make any final adjustments to your schedule.</Step.Description>
            </Step.Content>
          </Step>

          <Step disabled>
            <Step.Content>
              <Step.Title>Registration</Step.Title>
              <Step.Description>Get ready to register for courses  @ 6:00AM. Make sure to get plenty of rest and drink lots of coffee.</Step.Description>
            </Step.Content>
          </Step>
        </Step.Group>
      </Responsive>


      <Segment basic>Pellentesque habitant morbi tristique senectus.</Segment>


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
                  You added <a>Jenny Hess</a> to your <a>coworker</a> group.
                </Feed.Summary>
              </Feed.Content>
            </Feed.Event>

            <Feed.Event>
              <Feed.Label image='/images/avatar/small/molly.png'/>
              <Feed.Content>
                <Feed.Date content='3 days ago'/>
                <Feed.Summary>
                  You added <a>Molly Malone</a> as a friend.
                </Feed.Summary>
              </Feed.Content>
            </Feed.Event>

            <Feed.Event>
              <Feed.Label image='/images/avatar/small/elliot.jpg'/>
              <Feed.Content>
                <Feed.Date content='4 days ago'/>
                <Feed.Summary>
                  You added <a>Elliot Baker</a> to your <a>musicians</a> group.
                </Feed.Summary>
              </Feed.Content>
            </Feed.Event>
          </Feed>
        </Card.Content>
      </Card>

      <Card fluid="fluid">
        <Card.Content>
          <Card.Header>Ready</Card.Header>
        </Card.Content>
        <Card.Content>
          <Feed>
            <Feed.Event>
              <Feed.Label image='/images/avatar/small/jenny.jpg'/>
              <Feed.Content>
                <Feed.Date content='1 day ago'/>
                <Feed.Summary>
                  You added <a>Jenny Hess</a> to your <a>coworker</a> group.
                </Feed.Summary>
              </Feed.Content>
            </Feed.Event>

            <Feed.Event>
              <Feed.Label image='/images/avatar/small/molly.png'/>
              <Feed.Content>
                <Feed.Date content='3 days ago'/>
                <Feed.Summary>
                  You added <a>Molly Malone</a> as a friend.
                </Feed.Summary>
              </Feed.Content>
            </Feed.Event>

            <Feed.Event>
              <Feed.Label image='/images/avatar/small/elliot.jpg'/>
              <Feed.Content>
                <Feed.Date content='4 days ago'/>
                <Feed.Summary>
                  You added <a>Elliot Baker</a> to your <a>musicians</a> group.
                </Feed.Summary>
              </Feed.Content>
            </Feed.Event>
          </Feed>
        </Card.Content>
      </Card>

      <Card fluid>
        <Card.Content>
          <Card.Header>Course Issues</Card.Header>
        </Card.Content>
        <Card.Content>

          <Responsive maxWidth={768} as={Card.Group} itemsPerRow={2}>
            <Card
              color="red"
              href='#card-example-link-card'
              header='CSE 142'
              meta='NW(5)'
              description='Jenny is a student studying Media Management at the New School'
            />
            <Card
              color="red"
              href='#card-example-link-card'
              header='MATH 124'
              meta='NW(3)'
              description='Jenny is a student studying Media Management at the New School'
            />
            <Card
              href='#card-example-link-card'
              header='Jenny Hess'
              meta='Friend'
              description='Jenny is a student studying Media Management at the New School'
            />
           <Card
             href='#card-example-link-card'
             header='Jenny Hess'
             meta='Friend'
             description='Jenny is a student studying Media Management at the New School'
           />
           <Card
             href='#card-example-link-card'
             header='Jenny Hess'
             meta='Friend'
             description='Jenny is a student studying Media Management at the New School'
           />
           <Card color="red">
             <Card.Content>
               <Image floated='right' size='mini' src='/images/avatar/large/molly.png' />
               <Card.Header>Molly Thomas</Card.Header>
               <Card.Meta>New User</Card.Meta>
               <Card.Description>
                 Molly wants to add you to the group <strong>musicians</strong>
               </Card.Description>
             </Card.Content>
            </Card>
          </Responsive>

          <Responsive minWidth={768} as={Card.Group} itemsPerRow={3}>
            <Card
              color="red"
              href='#card-example-link-card'
              header='CSE 142'
              meta='NW(5)'
              description='Jenny is a student studying Media Management at the New School'
            />
            <Card
              color="red"
              href='#card-example-link-card'
              header='MATH 124'
              meta='NW(3)'
              description='Jenny is a student studying Media Management at the New School'
            />
            <Card
              href='#card-example-link-card'
              header='Jenny Hess'
              meta='Friend'
              description='Jenny is a student studying Media Management at the New School'
            />
           <Card
             href='#card-example-link-card'
             header='Jenny Hess'
             meta='Friend'
             description='Jenny is a student studying Media Management at the New School'
           />
           <Card color="red">
             <Card.Content>
               <Image floated='right' size='mini' src='/images/avatar/large/molly.png' />
               <Card.Header>Molly Thomas</Card.Header>
               <Card.Meta>New User</Card.Meta>
               <Card.Description>
                 Molly wants to add you to the group <strong>musicians</strong>
               </Card.Description>
             </Card.Content>
            </Card>
          </Responsive>

        </Card.Content>
      </Card>

      <Card fluid >
        <Card.Content>
          <Card.Header>Registration</Card.Header>
        </Card.Content>
        <Card.Content>
          <Card.Description>
            <p>Your priority registration date is not yet availble. Priority Registration goes from <strong>Nov. 2. 2018 - Nov. 18, 2018</strong>.</p>
          </Card.Description>
        </Card.Content>
        <Card.Content extra="extra">
          Please refer to <a href="">P1 Registration Dates</a> to find out when you can register for classes.
        </Card.Content>
      </Card>

      <Card fluid>
        <Card.Content>
          <Card.Header>Registration</Card.Header>
        </Card.Content>
        <Card.Content>
          <Card.Description>
            <p>Your estimated priority registration date is <strong>Nov. 4, 2018</strong>.</p>
          </Card.Description>
        </Card.Content>
        <Card.Content extra="extra">
          How is your <a href="">P1 Registration Date</a> calculated?
        </Card.Content>
      </Card>


    </div>);
  }
}
export default Registration
