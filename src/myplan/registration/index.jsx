


import React from 'react';
import { Panel } from 'react-bootstrap'
import { Responsive, Step, Icon, Button, Card, Image, Feed, Grid, Segment, Header, Placeholder, List, Divider} from 'semantic-ui-react'

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
              <Image floated='right' size='mini' src='/images/avatar/large/molly.png' />
              <Card.Header>Molly Thomas</Card.Header>
              <Card.Meta>New User</Card.Meta>
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
               <Image floated='right' size='mini' src='/images/avatar/large/molly.png' />
               <Card.Header>Molly Thomas</Card.Header>
               <Card.Meta>New User</Card.Meta>
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
                <Image floated='right' size='mini' src='/images/avatar/large/molly.png' />
                <Card.Header>Molly Thomas</Card.Header>
                <Card.Meta>New User</Card.Meta>
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
                 <Image floated='right' size='mini' src='/images/avatar/large/molly.png' />
                 <Card.Header>Molly Thomas</Card.Header>
                 <Card.Meta>New User</Card.Meta>
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
                  <Image floated='right' size='mini' src='/images/avatar/large/molly.png' />
                  <Card.Header>Molly Thomas</Card.Header>
                  <Card.Meta>New User</Card.Meta>
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
                  <Image floated='right' size='mini' src='/images/avatar/large/molly.png' />
                  <Card.Header>Molly Thomas</Card.Header>
                  <Card.Meta>New User</Card.Meta>
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

      <Segment.Group>

        <Segment>
          <Header as='h2'>Registration</Header>
          <p>The following courses you have planned are ready for registration!</p>

          <List relaxed>
            <List.Item>
              <List.Content floated="left">
                <List.Header>CSE 142</List.Header>
                <List.Description>NW 5 credits</List.Description>
              </List.Content>
              <Button disabled size='mini'floated="right">Submit</Button>
            </List.Item>
            <List.Item>
              <List.Content floated="left">
                <List.Header>MATH 124</List.Header>
                <List.Description>NW 5 credits</List.Description>
              </List.Content>
              <Button disabled size='mini' floated="right">Submit</Button>
            </List.Item>
            <List.Item>
              <List.Content floated="left">
                <List.Header>BIO 200</List.Header>
                <List.Description>NW 5 credits</List.Description>
              </List.Content>
              <Button disabled size='mini' floated="right">Submit</Button>
            </List.Item>
            <List.Item>
              <List.Content floated="left">
                <List.Header>ENG 401</List.Header>
                <List.Description>NW 5 credits</List.Description>
              </List.Content>
              <Button disabled size='mini' floated="right">Submit</Button>
            </List.Item>
          </List>
        </Segment>

        <Segment>
          <p>Your estimated priority registration date is <strong>Nov. 4, 2018</strong>.</p>
        </Segment>

        <Segment>
         <Grid columns={2}>
           <Grid.Column>
              <p>MyPlan can submit your entire Plan!</p>
             <Button disabled>Submit</Button>
           </Grid.Column>
           <Grid.Column>
             <p>Use to manually enter SLNs.</p>
             <Button basic>Visit SPS</Button>
           </Grid.Column>
         </Grid>
        </Segment>
       </Segment.Group>


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


      <Panel>
        <Panel.Heading>Panel Header</Panel.Heading>
        <Panel.Body>Panel content</Panel.Body>
        <Panel.Body>Panel content</Panel.Body>
      </Panel>

    </div>);
  }
}
export default Registration
