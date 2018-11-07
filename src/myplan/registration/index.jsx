


import React from 'react';
import { Panel } from 'react-bootstrap'
import { Container, Message, Responsive, Step, Icon, Button, Card, Image, Feed, Grid, Segment, Header, Placeholder, List, Divider, Label, Modal } from 'semantic-ui-react'

import './registration.scss';

class Registration extends React.Component {

  constructor(props) {
    super(props);
  }

  state = { open: false }
  show = () => this.setState({ open: true })
  close = () => this.setState({ open: false })

  render() {

    const { open } = this.state

    return (<div>

      <Responsive maxWidth={767}>
        <Grid>
          <Grid.Column width={10}>
            <Label color='gray' basic>Upcoming</Label>
            <Header as='h1' style={{margin:'0'}}>Winter 2019</Header>
          </Grid.Column>
          <Grid.Column width={6} verticalAlign='bottom'>
            <Label color='gray' size='mini'>Current</Label>
            <p><a href="#">Autumn 2018</a></p>
          </Grid.Column>
        </Grid>
      </Responsive>

      <Responsive minWidth={768}>
        <Grid>
          <Grid.Row columns={3}>
            <Grid.Column>
              <Label color='gray' basic>Upcoming</Label>
              <Header as='h1' style={{margin:'0'}}>Winter 2019</Header>
            </Grid.Column>
            <Grid.Column>&nbsp;</Grid.Column>
            <Grid.Column verticalAlign='bottom'>
              <Label color='gray' size='mini'>Current</Label>
              <p><a href="#">Autumn 2018</a></p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Responsive>

      <Divider />

      <Responsive maxWidth={767}>
        <Step.Group size="mini" unstackable fluid widths={3}>
          <Step completed>
            <Step.Content>
              <Step.Title>Preview</Step.Title>
            </Step.Content>
          </Step>

          <Step active>
            <Step.Content>
              <Step.Title style={{'white-space':'nowrap'}}>Pre-registration</Step.Title>
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
        <Step.Group size="small" widths={3}>
          <Step completed>
            <Step.Content>
              <Step.Title>Preview</Step.Title>
              <Step.Description>Find Courses/Sections when Time Schedule is published. Fix issues or resolve holds.</Step.Description>
            </Step.Content>
          </Step>

          <Step active>
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
        <Message negative size='tiny'>The following hold(s) will prevent you from registration.</Message>
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


      <Segment color="red">
        <Header as='h2'>Planned Items</Header>

        <Label as='a' color='red' ribbon>Issues</Label>

        <List divided relaxed='very'>
          <List.Item as='a' href='#'>
            <List.Header>CSE 142 Computer Programming I (4)</List.Header>
            <List.Content>
              <List.Description><Label color='gray' basic horizontal size='mini'>A</Label> KNE 130 Tue/Thur 8:30-9:50</List.Description>
              <List.Description><Label color='gray' basic horizontal size='mini'>AB</Label> KNE 130 Tue/Thur 8:30-9:50</List.Description>
              <Message negative size='mini'>There is a time conflict with another course!</Message>
            </List.Content>
          </List.Item>
          <List.Item as='a' href='#'>
            <List.Header>BIO A 370 Introduction to Primates (5)</List.Header>
            <List.Content>
              <List.Description><Label color='gray' basic horizontal size='mini'>A</Label> KNE 130 Tue/Thur 8:30-9:50</List.Description>
              <List.Description><Label color='gray' basic horizontal size='mini'>AC</Label> KNE 130 Tue/Thur 8:30-9:50</List.Description>
              <Message negative size='mini'>There is a time conflict with another course!</Message>
            </List.Content>
          </List.Item>
          <List.Item as='a' href='#'>
            <List.Header>MATH 124 Calculus with Analytic Geometry I (5)</List.Header>
            <List.Content>
              <List.Description><Label color='gray' basic horizontal size='mini'>A</Label> KNE 130 Tue/Thur 8:30-9:50</List.Description>
              <List.Description><Label color='red' basic horizontal size='mini'>BC</Label> KNE 130 Tue/Thur 8:30-9:50</List.Description>
              <Message negative size='mini'>You must select the correct quiz section.</Message>
            </List.Content>
          </List.Item>
          <List.Item as='a' href='#'>
            <List.Header>CHEM 110 Preparation for General Chemistry (3-5)</List.Header>
            <List.Content>
              <Message negative size='mini'>This course is not offered in Winter 2019.</Message>
            </List.Content>
          </List.Item>
        </List>

      </Segment>



        <Segment color="red">
          <Header as='h2'>Not Offered</Header>
          <Message negative size='tiny'>The following courses are not offered in Winter 2019.</Message>
          <List divided relaxed>
            <List.Item>
              <List.Header>CSE 142 Computer Programming I (4)</List.Header>
            </List.Item>
            <List.Item>
              <List.Header>CHEM 110 Preparation for General Chemistry (3-5)</List.Header>
            </List.Item>
          </List>
        </Segment>

        <Segment color="red">
          <Header as='h2'>Incorrect Sections</Header>
          <Message negative size='tiny'>
            <p>You must choose the correct sections.</p>
          </Message>
          <List divided relaxed='very'>
            <List.Item as='a' href='#'>
              <List.Header>CSE 142 Computer Programming I (4)</List.Header>
              <List.Content>
                <List.Description><Label color='gray' basic horizontal size='mini'>A</Label> KNE 130 Tue/Thur 8:30-9:50</List.Description>
                <List.Description><Label color='red' basic horizontal size='mini'>BC</Label> KNE 130 Tue/Thur 8:30-9:50</List.Description>
              </List.Content>
            </List.Item>
          </List>
        </Segment>

        <Segment color="red">
          <Header as='h2'>Schedule Conflicts</Header>
          <Message negative size='tiny'>
            <p>2 of your planned sections have schedule conflicts.</p>
          </Message>
          <List divided relaxed='very'>
            <List.Item as='a' href='#'>
              <List.Header>CSE 142 Computer Programming I (4)</List.Header>
              <List.Content>
                <List.Description><Label color='red' basic horizontal size='mini'>A</Label> KNE 130 Tue/Thur 8:30-9:50</List.Description>
                <List.Description><Label color='red' basic horizontal size='mini'>AA</Label> KNE 130 Tue/Thur 8:30-9:50</List.Description>
              </List.Content>
            </List.Item>
            <List.Item as='a' href='#'>
              <List.Header>BIO A 370 Introduction to Primates (5)</List.Header>
              <List.Content>
                <List.Description><Label color='red' basic horizontal size='mini'>A</Label> KNE 130 Tue/Thur 8:30-9:50</List.Description>
                <List.Description><Label color='red' basic horizontal size='mini'>AA</Label> KNE 130 Tue/Thur 8:30-9:50</List.Description>
              </List.Content>
            </List.Item>
          </List>
        </Segment>

        <Segment.Group>
          <Segment>
            <Header as='h2'>Registration</Header>

            <Label as='a' color='green' ribbon>Ready!</Label>

            <List divided relaxed='very'>
              <List.Item as='a' href='#'>
                <List.Header>CSE 142 Computer Programming I (4)</List.Header>
                <List.Content>
                  <List.Description><Label color='gray' basic horizontal size='mini'>A</Label> KNE 130 Tue/Thur 8:30-9:50</List.Description>
                  <List.Description><Label color='gray' basic horizontal size='mini'>AA</Label> KNE 130 Tue/Thur 8:30-9:50</List.Description>
                  <Button size='mini' onClick={this.show}>Launch Modal Card</Button>
                </List.Content>
              </List.Item>
              <List.Item as='a' href='#'>
                <List.Header>CHEM 110 Preparation for General Chemistry (3-5)</List.Header>
                <List.Content>
                  <List.Description><Label color='gray' basic horizontal size='mini'>A</Label> KNE 130 Tue/Thur 8:30-9:50</List.Description>
                  <List.Description><Label color='gray' basic horizontal size='mini'>AA</Label> KNE 130 Tue/Thur 8:30-9:50</List.Description>
                </List.Content>
              </List.Item>
              <List.Item as='a' href='#'>
                <List.Header>BIO A 370 Introduction to Primates (5)</List.Header>
                <List.Content>
                  <List.Description><Label color='gray' basic horizontal size='mini'>A</Label> KNE 130 Tue/Thur 8:30-9:50</List.Description>
                </List.Content>
              </List.Item>
            </List>

            <Modal size='mini' open={open} onClose={this.close}>
              <Modal.Header>CSE 142 Computer Programming I (4)</Modal.Header>
              <Modal.Content image scrolling>
                <Modal.Description>
                  <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' style={{ paddingBottom: 5 }} />
                  <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' style={{ paddingBottom: 5 }} />
                  <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' style={{ paddingBottom: 5 }} />
                  <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' style={{ paddingBottom: 5 }} />
                  <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' style={{ paddingBottom: 5 }} />
                  <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' style={{ paddingBottom: 5 }} />
                  <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' style={{ paddingBottom: 5 }} />
                  <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' style={{ paddingBottom: 5 }} />
                </Modal.Description>
              </Modal.Content>
              <Modal.Actions>
                <Button primary>
                  Action
                </Button>
              </Modal.Actions>
            </Modal>

            <Message info size='small'>
              <Message.Header>Priority Registration</Message.Header>
              <p>Your est. registration date is not yet available. Priority registration starts on Nov. 2, 2018 @ 6am.</p>
              <Button color="blue" disabled>Submit using MyPlan</Button>
            </Message>
            <Message info size='small'>
              <Message.Header>Priority Registration</Message.Header>
              <p>Your estimated priority registration date is <strong>Nov. 4, 2018</strong>.</p>
              <Button color="blue" disabled>Submit using MyPlan</Button>
            </Message>
            <Message info size='small'>
              <Message.Header>Priority Registration</Message.Header>
              <p>Registration is on-going! MyPlan can submit your planned courses when it is time for your registration.</p>
              <Button color="blue">Submit using MyPlan</Button>
            </Message>

          </Segment>
          <Message size='tiny' attached='bottom'>
            <Message.Header>Need to manually enter SLN numbers?</Message.Header>
            <p>You may manually enter your SLN numbers using <a href='#'>SPS Registration</a>.</p>
          </Message>

        </Segment.Group>

        <Segment>
          <Header as='h3'>Dropping Courses</Header>
          <p>You cannot drop courses using MyPlan. If you need to update your schedule, visit SPS. <a href='#'>Drop courses using SPS</a>.</p>
        </Segment>

        <br/>
        <br/>
        <br/>
        <br/>
        <br/>


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
