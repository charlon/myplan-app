import 'rc-steps/assets/index.css';
import 'rc-steps/assets/iconfont.css';
import React from 'react'
import { Card, CardDeck, Row, Col, ListGroup}  from 'react-bootstrap'
import Steps from 'rc-steps';

import UserProfile from '../components/UserProfile.jsx'

import './Current.scss';

class Current extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount(){
    document.title = "Home"
  }

  render() {
    return (<div>

      <Row className='mb-4'>
        <Col xs={6}>
          <span className="badge badge-secondary">Week 11 of 11</span>
          <h1 className='mt-0 text-nowrap'>Autumn 2018</h1>
        </Col>
        <Col xs={6}>

          <Row>
            <Col xs={4}>&nbsp;</Col>
            <Col xs={4} className='text-right'>
              <span className="badge badge-light"> -- Previous</span>
              <h6 className='mt-0 font-weight-light text-nowrap'><a href='/previous'>Summer 2018</a></h6>
            </Col>
            <Col xs={4}>
              <span className="badge badge-light">Next --</span>
              <h6 className='mt-0 font-weight-light text-nowrap'><a href='/preview'>Winter 2019</a></h6>
            </Col>
          </Row>

        </Col>
      </Row>

      <Row className='mb-3'>
        <Col className='d-md-none'>

          <Steps size='small' direction="vertical" current={3}>
            <Steps.Step title="Quarter Begins" description='Oct. 3, 2018' />
            <Steps.Step title="Preview" description='Time schedule is published for Winter 2019.' />
            <Steps.Step title="Registration" description='Winter 2019 registration begins.' />
            <Steps.Step title="Finals Week" description='Finals week begins.' />
          </Steps>

        </Col>
        <Col className='d-none d-md-block'>

          <Steps direction='horizontal' current={3}>
            <Steps.Step title="Quarter Begins" description='Oct. 3, 2018' />
            <Steps.Step title="Preview" description='Time schedule is published for Winter 2019.' />
            <Steps.Step title="Registration" description='Winter 2019 registration begins.' />
            <Steps.Step title="Finals Week" description='Finals week begins.' />
          </Steps>

        </Col>
      </Row>

      <Row>
        <Col md={4}>

          <UserProfile netid="jjulius" />

          <Card className='shadow-sm mb-4'>
            <Card.Body>
              <Card.Title as='h4'>Holds</Card.Title>
              <Card.Text>Here is a list of your holds!</Card.Text>
              <Card.Link href="#">View MyUW</Card.Link>
            </Card.Body>
          </Card>

        </Col>
        <Col md={8}>

          <Card className='shadow-sm'>
            <Card.Body>
              <Card.Title as='h3'>Current Schedule</Card.Title>

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

              <h4 className='text-right'>Currently Enrolled: 19 credits</h4>

              <CardDeck className='mt-4'>
                <Card bg='light' className='shadow-sm mr-0'>
                  <Card.Body>
                    <Card.Title as='h4'>Dropping Courses</Card.Title>
                    <Card.Text>You cannot drop courses using MyPlan. If you need to update your schedule, please visit <strong>SPS Registration</strong>.</Card.Text>
                    <Card.Link href="#">SPS Registration</Card.Link>
                  </Card.Body>

                </Card>
                <Card border='light' className='shadow-sm'>
                  <Card.Body>
                    <Card.Title as='h4'>Advising Help?</Card.Title>
                    <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc turpis quam, euismod vel dolor ut, rhoncus volutpat orci. </Card.Text>
                    <Card.Link href="#">Contact your Adviser</Card.Link>
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
export default Current
