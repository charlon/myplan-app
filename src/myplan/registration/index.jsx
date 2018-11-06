


import React from 'react';
import { Panel } from 'react-bootstrap'
import { Container, Message, Responsive, Step, Icon, Button, Card, Image, Feed, Grid, Segment, Header, Placeholder, List, Divider, Label } from 'semantic-ui-react'

import './registration.scss';

class Registration extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (<div>


      <Grid>
        <Grid.Column width={10}>
          <Label color='gray' basic>Upcoming</Label>
          <Header as='h1' style={{margin:'0'}}>Winter 2019</Header>
        </Grid.Column>
        <Grid.Column width={6} verticalAlign='top' >
          <Label color='gray' size='mini'>Current</Label>
          <p><a href="#">Autumn 2018</a></p>
        </Grid.Column>
      </Grid>

      <Divider />

      <Responsive maxWidth={767}>
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
        <Step.Group size="small" fluid widths={3}>
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

      <Segment color='red'>
        <Header as='h2'>Holds</Header>
        <Message negative size='tiny'>
          <Message.Header>You have holds!</Message.Header>
          <p>The following registration holds will prevent you from being able to register.</p>
        </Message>
        <List divided relaxed>
          <List.Item>
            <List.Content>
              <List.Header>You have a hold on this.</List.Header>
              <List.Description>Contact blkajd sadflk lksadjf lk asfdlkj</List.Description>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Content>
            <List.Header>You have a hold on that.</List.Header>
            <List.Description>Contact blkajd sadflk lksadjf lk asfdlkj</List.Description>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Content>
            <List.Header>You have a hold on this and that.</List.Header>
            <List.Description>Contact blkajd sadflk lksadjf lk asfdlkj</List.Description>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Content>
            <List.Header>You have a hold over there.</List.Header>
            <List.Description>Contact blkajd sadflk lksadjf lk asfdlkj</List.Description>
            </List.Content>
          </List.Item>
        </List>
      </Segment>



      <Segment color='red'>

        <Header as='h2'>Issues</Header>

        <Message negative size='tiny'>
          <Message.Header>We found problems with your plan.</Message.Header>
          <p>The following courses/sections have issues that need to be addressed!</p>
        </Message>

        <Card.Group itemsPerRow={2}>
          <Card>
            <Card.Content>
              <Card.Header>CSE 142 AA</Card.Header>
              <Card.Meta>KNE 130 Tue/Thur 8:30-9:50</Card.Meta>
              <Card.Description>
               <Placeholder>
                 <Placeholder.Paragraph>
                   <Placeholder.Line length='medium' />
                   <Placeholder.Line length='short' />
                 </Placeholder.Paragraph>
               </Placeholder>
              </Card.Description>
            </Card.Content>
           </Card>
           <Card>
             <Card.Content>
               <Card.Header>Math 124 CA</Card.Header>
               <Card.Meta>KNE 130 Tue/Thur 8:30-9:50</Card.Meta>
               <Card.Description>
                <Placeholder>
                  <Placeholder.Paragraph>
                    <Placeholder.Line length='medium' />
                    <Placeholder.Line length='short' />
                  </Placeholder.Paragraph>
                </Placeholder>
               </Card.Description>
             </Card.Content>
            </Card>
            <Card>
              <Card.Content>
                <Card.Header>BIO 200 AD</Card.Header>
                <Card.Meta>KNE 130 Tue/Thur 8:30-9:50</Card.Meta>
                <Card.Description>
                 <Placeholder>
                   <Placeholder.Paragraph>
                     <Placeholder.Line length='medium' />
                     <Placeholder.Line length='short' />
                   </Placeholder.Paragraph>
                 </Placeholder>
                </Card.Description>
              </Card.Content>
             </Card>
             <Card>
               <Card.Content>
                 <Card.Header>ENG 401 BC</Card.Header>
                 <Card.Meta>KNE 130 Tue/Thur 8:30-9:50</Card.Meta>
                 <Card.Description>
                  <Placeholder>
                    <Placeholder.Paragraph>
                      <Placeholder.Line length='medium' />
                      <Placeholder.Line length='short' />
                    </Placeholder.Paragraph>
                  </Placeholder>
                 </Card.Description>
               </Card.Content>
              </Card>
            </Card.Group>
      </Segment>


        <Segment color="red">
          <Header as='h2'>Issues</Header>

          <Message negative size='tiny'>
            <Message.Header>We found problems with your plan.</Message.Header>
            <p>The following courses/sections have issues that need to be fixed!</p>
          </Message>

          <List divided relaxed>
            <List.Item>
              <List.Content floated="left">
                <List.Header>CSE 142 AF</List.Header>
                <List.Description>KNE 130 Tue/Thur 8:30-9:50</List.Description>
              </List.Content>
              <Button disabled size='mini'floated="right">View</Button>
            </List.Item>
            <List.Item>
              <List.Content floated="left">
                <List.Header>MATH 124 BC</List.Header>
                <List.Description>KNE 130 Tue/Thur 8:30-9:50</List.Description>
              </List.Content>
              <Button disabled size='mini' floated="right">View</Button>
            </List.Item>
            <List.Item>
              <List.Content floated="left">
                <List.Header>BIO 200 CA</List.Header>
                <List.Description>KNE 130 Tue/Thur 8:30-9:50</List.Description>
              </List.Content>
              <Button disabled size='mini' floated="right">View</Button>
            </List.Item>
            <List.Item>
              <List.Content floated="left">
                <List.Header>ENG 401 AA</List.Header>
                <List.Description>KNE 130 Tue/Thur 8:30-9:50</List.Description>
              </List.Content>
              <Button disabled size='mini' floated="right">View</Button>
            </List.Item>
          </List>
        </Segment>

        <Segment.Group>
          <Segment>
            <Header as='h2'>Registration</Header>

            <Label as='a' color='green' ribbon>Ready!</Label>

            <List divided relaxed>
              <List.Item>
                <List.Content>
                  <List.Header>CSE 142 Computer Programming I (4)</List.Header>
                  <List.Description><Label color='gray' basic horizontal size='mini'>A</Label> KNE 130 Tue/Thur 8:30-9:50</List.Description>
                  <List.Description><Label color='gray' basic horizontal size='mini'>AA</Label> KNE 130 Tue/Thur 8:30-9:50</List.Description>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Content>
                  <List.Header>CHEM 110 Preparation for General Chemistry (3-5)</List.Header>
                  <List.Description><Label color='gray' basic horizontal size='mini'>A</Label> KNE 130 Tue/Thur 8:30-9:50</List.Description>
                  <List.Description><Label color='gray' basic horizontal size='mini'>AA</Label> KNE 130 Tue/Thur 8:30-9:50</List.Description>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Content>
                  <List.Header>BIO A 370 Introduction to Primates (5)</List.Header>
                  <List.Description><Label color='gray' basic horizontal size='mini'>A</Label> KNE 130 Tue/Thur 8:30-9:50</List.Description>
                </List.Content>
              </List.Item>
            </List>

            <Message info size='small'>
              <Message.Header>Priority Registration</Message.Header>
              <p>Your est. registration date is not yet available. Priority registration starts on Nov. 2, 2018 @ 6am.</p>
              <Button color="blue" disabled>Submit using MyPlan</Button>
            </Message>
            <Message info size='small'>
              <Message.Header>Priority Registration</Message.Header>
              <p>Your estimated priority registration date is <strong>Nov. 4, 2018</strong>.</p>
              <Button color="blue" disabled>Submit using MyPlan</Button>
              <Label attached='top right' color='blue'>0:00:00</Label>
            </Message>
            <Message info size='small'>
              <Message.Header>Priority Registration</Message.Header>
              <p>Registration is on-going! MyPlan can submit your planned courses when it is time for your registration.</p>
              <Button color="blue">Submit using MyPlan</Button>
            </Message>

          </Segment>
          <Message size='tiny' attached='bottom'>
            <Message.Header>SPS Registration</Message.Header>
            <p>You may manually enter your SLN numbers using <a href='#'>SPS Registration</a>.</p>
          </Message>
        </Segment.Group>

        <Segment>
          <Header as='h3'>Dropping Courses</Header>
          <p>You cannot drop courses using MyPlan. If you need to update your schedule, visit SPS. <a href='#'>Drop courses using SPS</a>.</p>
        </Segment>






      <p>This is a Panel component using React-Bootstrap v3.</p>

      <Panel>
        <Panel.Heading>Panel Header</Panel.Heading>
        <Panel.Body>Panel content</Panel.Body>
        <Panel.Body>Panel content</Panel.Body>
      </Panel>

    </div>);
  }
}
export default Registration
