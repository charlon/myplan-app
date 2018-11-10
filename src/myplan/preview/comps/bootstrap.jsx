import 'rc-steps/assets/index.css';
import 'rc-steps/assets/iconfont.css';
import React from 'react'
import { Badge, Card, CardDeck, Container, Row, Col, Alert, Button, ListGroup}  from 'react-bootstrap'
import Steps, { Step } from 'rc-steps';

class BootstrapExample extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {


    return (<div>

      <Row className='mb-4'>
        <Col xs={6}>
          <span className="badge badge-secondary">Upcoming</span>
          <h1 className='mt-0 text-nowrap'>Winter 2019</h1>
        </Col>
        <Col xs={6} className='text-right'>
          <span className="badge badge-light">Current</span>
          <h3 className='mt-0 font-weight-light text-nowrap'><a href='/'>Autumn 2018</a></h3>
        </Col>
      </Row>

      <Row className='mb-3'>
        <Col className='d-md-none'>

          <Steps size='small' direction="vertical" current={0}>
            <Steps.Step title="Registration Preview" description='Fix the errors that we found with your plan' />
            <Steps.Step title="Acknowledgements" description='1 week prior to Registration.' />
            <Steps.Step title="Registration" description='Its go time! Youre priority registration is Nov. 2, 2018' />
            <Steps.Step title="Quarter Begins" description='asdfasf' />
          </Steps>

        </Col>
        <Col className='d-none d-md-block'>

          <Steps direction='horizontal' current={0}>
            <Steps.Step title="Registration Preview" description='Fix the errors that we found with your plan' />
            <Steps.Step title="Acknowledgements" description='1 week prior to Registration.' />
            <Steps.Step title="Registration" description='Its go time! Youre priority registration is Nov. 2, 2018' />
            <Steps.Step title="Quarter Begins" description='asdfasf' />
          </Steps>

        </Col>
      </Row>

      <Row>
        <Col md={4}>

          <Card border='light' className='shadow-sm mb-4'>
            <Card.Img variant="top" src="https://myplan-dev.washington.edu/home/images/6.png" />
            <Card.Body>
              <Card.Title as='h4'>Hello, J. Julius!</Card.Title>
              <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc turpis quam, euismod vel dolor ut, rhoncus volutpat orci. Morbi blandit finibus neque, ac ullamcorper mauris.</Card.Text>
              <Card.Link href="#">View Profile</Card.Link>
              <Card.Link href="#">Hide Forever!</Card.Link>
            </Card.Body>
          </Card>

          <Card className='shadow-sm mb-4'>
            <Card.Body>
              <Card.Title as='h4'>Holds</Card.Title>
              <Card.Text>Here is a list of your holds!</Card.Text>
              <Card.Link href="#">View MyUW</Card.Link>
            </Card.Body>
          </Card>

          <Card className='shadow-sm mb-4'>
            <Card.Body>
              <Card.Title as='h4'>Scheduled Courses</Card.Title>

              <ListGroup variant='flush' as='ul' className='mb-4'>
                <ListGroup.Item as="li" className='pl-0 pr-0 border-top-0'>
                  <a href="#" className="list-group-item-action">
                    <div className="d-flex w-100 justify-content-between">
                      <h5 className="mb-1">CSE 142 Computer Programming I </h5>
                      <small className='text-nowrap'>5 credits</small>
                    </div>
                    <ul className='list-unstyled'>
                      <li>A KNE 130 Tue/Thur 8:30-9:50</li>
                      <li>AC KNE 130 Tue/Thur 8:30-9:50</li>
                    </ul>
                  </a>
                </ListGroup.Item>
                <ListGroup.Item as="li" className='pl-0 pr-0'>
                  <a href="#" className="list-group-item-action">
                    <div className="d-flex w-100 justify-content-between">
                      <h5 className="mb-1">CHEM 110 Preparation for General Chemistry</h5>
                      <small className='text-nowrap'>5 credits</small>
                    </div>
                    <ul className='list-unstyled'>
                      <li>A KNE 130 Tue/Thur 8:30-9:50</li>
                      <li>AC KNE 130 Tue/Thur 8:30-9:50</li>
                    </ul>
                  </a>
                </ListGroup.Item>
                <ListGroup.Item as="li" className='pl-0 pr-0'>
                  <a href="#" className="list-group-item-action">
                    <div className="d-flex w-100 justify-content-between">
                      <h5 className="mb-1">BIO A 370 Introduction to Primates</h5>
                      <small className='text-nowrap'>5 credits</small>
                    </div>
                    <ul className='list-unstyled'>
                      <li>A KNE 130 Tue/Thur 8:30-9:50</li>
                      <li>AC KNE 130 Tue/Thur 8:30-9:50</li>
                    </ul>
                  </a>
                </ListGroup.Item>
                <ListGroup.Item as="li" className='pl-0 pr-0 border-bottom-0'>
                  <a href="#" className="list-group-item-action">
                    <div className="d-flex w-100 justify-content-between">
                      <h5 className="mb-1">GEN ST 199 A2: University Community</h5>
                      <small className='text-nowrap'>12 credits</small>
                    </div>
                    <ul className='list-unstyled'>
                      <li>GEN ST 199 A2: University Community TH 1:30-2:20</li>
                      <li>CHEM 142 C: General Chemistry MWF 12:30-1:20</li>
                      <li>CHEM 142 CD T 9:30-10:20 TH 2:30-5:20</li>
                      <li>ENGL 199 H: Linked Writing Course: HSERVE 100 MWF 8:30-9:20</li>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                  </a>
                </ListGroup.Item>
              </ListGroup>

              <Card.Link href="#">View MyUW</Card.Link>
            </Card.Body>
          </Card>

        </Col>
        <Col md={8}>

          <Card className='shadow-sm mb-4'>
            <Card.Body>
              <Card.Title as='h3'>Issues</Card.Title>

              <Alert variant='danger' className='mb-0'>These courses are ready!</Alert>

              <ListGroup variant='flush' as="ul">
                <ListGroup.Item as="li" className='pl-0 pr-0 border-top-0'>
                  <a href="#" className="list-group-item-action">
                    <div className="d-flex w-100 justify-content-between">
                      <h5 className="mb-1">CSE 142 Computer Programming I </h5>
                      <small className='text-nowrap'>5 credits</small>
                    </div>
                    <ul className='list-unstyled'>
                      <li>A KNE 130 Tue/Thur 8:30-9:50</li>
                      <li>AC KNE 130 Tue/Thur 8:30-9:50</li>
                    </ul>
                  </a>
                </ListGroup.Item>
                <ListGroup.Item as="li" className='pl-0 pr-0'>
                  <a href="#" className="list-group-item-action">
                    <div className="d-flex w-100 justify-content-between">
                      <h5 className="mb-1">CHEM 110 Preparation for General Chemistry</h5>
                      <small className='text-nowrap'>5 credits</small>
                    </div>
                    <ul className='list-unstyled'>
                      <li>A KNE 130 Tue/Thur 8:30-9:50</li>
                      <li>AC KNE 130 Tue/Thur 8:30-9:50</li>
                    </ul>
                  </a>
                </ListGroup.Item>
                <ListGroup.Item as="li" className='pl-0 pr-0'>
                  <a href="#" className="list-group-item-action">
                    <div className="d-flex w-100 justify-content-between">
                      <h5 className="mb-1">BIO A 370 Introduction to Primates</h5>
                      <small className='text-nowrap'>5 credits</small>
                    </div>
                    <ul className='list-unstyled'>
                      <li>A KNE 130 Tue/Thur 8:30-9:50</li>
                      <li>AC KNE 130 Tue/Thur 8:30-9:50</li>
                    </ul>
                  </a>
                </ListGroup.Item>
                <ListGroup.Item as="li" className='pl-0 pr-0 border-bottom-0'>
                  <a href="#" className="list-group-item-action">
                    <div className="d-flex w-100 justify-content-between">
                      <h5 className="mb-1">GEN ST 199 A2: University Community</h5>
                      <small className='text-nowrap'>12 credits</small>
                    </div>
                    <ul className='list-unstyled'>
                      <li>GEN ST 199 A2: University Community TH 1:30-2:20</li>
                      <li>CHEM 142 C: General Chemistry MWF 12:30-1:20</li>
                      <li>CHEM 142 CD T 9:30-10:20 TH 2:30-5:20</li>
                      <li>ENGL 199 H: Linked Writing Course: HSERVE 100 MWF 8:30-9:20</li>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                  </a>
                </ListGroup.Item>
              </ListGroup>

            </Card.Body>
          </Card>


          <Card className='shadow-sm'>
            <Card.Body>
              <Card.Title as='h3'>Ready</Card.Title>

              <Alert variant='success' className='mb-0'>These courses are ready!</Alert>

              <ListGroup variant='flush' as="ul">
                <ListGroup.Item as="li" className='pl-0 pr-0 border-top-0'>
                  <a href="#" className="list-group-item-action">
                    <div className="d-flex w-100 justify-content-between">
                      <h5 className="mb-1">CSE 142 Computer Programming I </h5>
                      <small className='text-nowrap'>5 credits</small>
                    </div>
                    <ul className='list-unstyled'>
                      <li>A KNE 130 Tue/Thur 8:30-9:50</li>
                      <li>AC KNE 130 Tue/Thur 8:30-9:50</li>
                    </ul>
                  </a>
                </ListGroup.Item>
                <ListGroup.Item as="li" className='pl-0 pr-0'>
                  <a href="#" className="list-group-item-action">
                    <div className="d-flex w-100 justify-content-between">
                      <h5 className="mb-1">CHEM 110 Preparation for General Chemistry</h5>
                      <small className='text-nowrap'>5 credits</small>
                    </div>
                    <ul className='list-unstyled'>
                      <li>A KNE 130 Tue/Thur 8:30-9:50</li>
                      <li>AC KNE 130 Tue/Thur 8:30-9:50</li>
                    </ul>
                  </a>
                </ListGroup.Item>
                <ListGroup.Item as="li" className='pl-0 pr-0'>
                  <a href="#" className="list-group-item-action">
                    <div className="d-flex w-100 justify-content-between">
                      <h5 className="mb-1">BIO A 370 Introduction to Primates</h5>
                      <small className='text-nowrap'>5 credits</small>
                    </div>
                    <ul className='list-unstyled'>
                      <li>A KNE 130 Tue/Thur 8:30-9:50</li>
                      <li>AC KNE 130 Tue/Thur 8:30-9:50</li>
                    </ul>
                  </a>
                </ListGroup.Item>
                <ListGroup.Item as="li" className='pl-0 pr-0 border-bottom-0'>
                  <a href="#" className="list-group-item-action">
                    <div className="d-flex w-100 justify-content-between">
                      <h5 className="mb-1">GEN ST 199 A2: University Community</h5>
                      <small className='text-nowrap'>12 credits</small>
                    </div>
                    <ul className='list-unstyled'>
                      <li>GEN ST 199 A2: University Community TH 1:30-2:20</li>
                      <li>CHEM 142 C: General Chemistry MWF 12:30-1:20</li>
                      <li>CHEM 142 CD T 9:30-10:20 TH 2:30-5:20</li>
                      <li>ENGL 199 H: Linked Writing Course: HSERVE 100 MWF 8:30-9:20</li>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                  </a>
                </ListGroup.Item>
              </ListGroup>

              <CardDeck className='mt-4'>
                <Card bg='light' className='shadow-sm mr-0'>
                  <Card.Body>
                    <Card.Title as='h4'>Priority Registration</Card.Title>
                    <Card.Text>Your estimated priority registration date is <strong>November 4, 2018.</strong> at 6:00am.</Card.Text>
                    <Button variant="primary">Submit using MyPlan</Button>
                  </Card.Body>
                </Card>
                <Card border='light' className='shadow-sm'>
                  <Card.Body>
                    <Card.Title as='h4'>Dropping Courses</Card.Title>
                    <Card.Text>You cannot drop courses using MyPlan. If you need to update your schedule, please visit <strong>SPS Registration</strong>.</Card.Text>
                    <Card.Link href="#">SPS Registration</Card.Link>
                  </Card.Body>
                </Card>
              </CardDeck>

            </Card.Body>
          </Card>




        </Col>
      </Row>

    </div>);
  }

}

export default BootstrapExample;
