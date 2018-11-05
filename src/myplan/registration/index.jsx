


import React from 'react';
import { Panel } from 'react-bootstrap'
import { Responsive, Step, Icon, Button, Card, Image, Feed, Grid, Segment, Header, Placeholder, List, Divider, Label } from 'semantic-ui-react'

import './registration.scss';

class Registration extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (<div>

      <Header as='h1'>Winter 2019</Header>

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


      <Segment basic>Pellentesque habitant morbi tristique senectus.</Segment>


      <Segment color='red'>
        <Header as='h2'>Holds</Header>
        <List relaxed>
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
        <p>The following courses/sections have issues that need to be addressed!</p>

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
          <p>The following courses/sections have issues that need to be addressed!</p>

          <List relaxed>
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




        <Segment>
          <Header as='h2'>Registration</Header>

          <Label as='a' color='green' ribbon>
            Ready!
          </Label>

          <List relaxed>
            <List.Item>
              <List.Content floated="left">
                <List.Header>CSE 142 AC</List.Header>
                <List.Description>KNE 130 Tue/Thur 8:30-9:50</List.Description>
              </List.Content>
              <Button disabled size='mini'floated="right">View</Button>
            </List.Item>
            <List.Item>
              <List.Content floated="left">
                <List.Header>MATH 124 BB</List.Header>
                <List.Description>KNE 130 Tue/Thur 8:30-9:50</List.Description>
              </List.Content>
              <Button disabled size='mini' floated="right">View</Button>
            </List.Item>
            <List.Item>
              <List.Content floated="left">
                <List.Header>BIO 200 AD</List.Header>
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

          <Segment compact>
            <p>Your estimated priority registration date is <strong>Nov. 4, 2018</strong>.</p>
            <Button color="blue">Submit using MyPlan</Button>
          </Segment>

         <Grid columns={2}>
           <Grid.Column>
            &nbsp;
           </Grid.Column>
           <Grid.Column>
             <p>Manually enter SLNs <br/><a href="#">SPS Registration</a></p>
           </Grid.Column>
         </Grid>
        </Segment>



      <Card fluid >
        <Card.Content>
          <Card.Header>Registration</Card.Header>
        </Card.Content>
        <Card.Content>
          <Card.Description>
            <p>Your priority registration date is not yet availble. Priority Registration goes from <strong>Nov. 2. 2018 - Nov. 18, 2018</strong>.</p>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
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
        <Card.Content extra>
          How is your <a href="">P1 Registration Date</a> calculated?
        </Card.Content>
      </Card>

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
