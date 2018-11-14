import 'rc-steps/assets/index.css';
import 'rc-steps/assets/iconfont.css';
import React from 'react'
import { Card, Row, Col, ListGroup}  from 'react-bootstrap'
import Steps from 'rc-steps';

import UserProfile from '../components/UserProfile.jsx'

import './future.scss';

class Future extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (<div>

      <Row className='mb-4'>
        <Col xs={6}>
          <span className="badge badge-secondary">Future</span>
          <h1 className='mt-0 text-nowrap'>Spring 2019</h1>
        </Col>
        <Col xs={6}>

          <Row>
            <Col xs={4}>&nbsp;</Col>
            <Col xs={4} className='text-right'>
              <span className="badge badge-light"> -- Previous</span>
              <h6 className='mt-0 font-weight-light text-nowrap'><a href='/preview'>Winter 2019</a></h6>
            </Col>
            <Col xs={4}>
              <span className="badge badge-light">Next --</span>
              <h6 className='mt-0 font-weight-light text-nowrap'><a href='/future'>Summer 2019</a></h6>
            </Col>
          </Row>

        </Col>
      </Row>

      <Row className='mb-3'>
        <Col className='d-md-none'>

          <Steps size='small' direction="vertical" current={0}>
            <Steps.Step title="Published" status='wait' description='The time schedule will publish on XXXX 2019' />
            <Steps.Step title="Acknowledgements" description='1 week prior to Registration.' />
            <Steps.Step title="Registration" description='Its go time! Youre priority registration is Nov. 2, 2018' />
            <Steps.Step title="Quarter Begins" description='asdfasf' />
          </Steps>

        </Col>
        <Col className='d-none d-md-block'>

          <Steps direction='horizontal'>
            <Steps.Step title="Published" status='wait' description='The time schedule will publish on XXXX 2019' />
            <Steps.Step title="Acknowledgements" description='1 week prior to Registration.' />
            <Steps.Step title="Registration" description='Its go time! Youre priority registration is Nov. 2, 2018' />
            <Steps.Step title="Quarter Begins" description='asdfasf' />
          </Steps>

        </Col>
      </Row>

      <Row>
        <Col md={4}>

          <UserProfile />

          <Card className='shadow-sm mb-4'>
            <Card.Body>
              <Card.Title as='h4'>Holds</Card.Title>
              <Card.Text>Here is a list of your holds!</Card.Text>
              <Card.Link href="#">View MyUW</Card.Link>
            </Card.Body>
          </Card>

        </Col>
        <Col md={8}>

          <p>View, add, or delete courses and sections from your plan to prepare
          for registration.MyPlan allows you to create an academic plan, but does not check your eligibility
          for planned courses and sections.You can also view course options in a calendar grid and register by choosing "plan". </p>

          <Card className='shadow-sm mb-4'>
            <Card.Body>
              <Card.Title as='h3'>Planned Courses</Card.Title>

              <ListGroup variant='flush' as="ul">
                <ListGroup.Item as="li" className='pl-0 pr-0 border-top-0'>
                  <a href="#" className="list-group-item-action">
                    <div className="d-flex w-100 justify-content-between">
                      <h5 className="mb-1">CSE 142 Computer Programming I </h5>
                      <small className='text-nowrap'>5 credits</small>
                    </div>
                  </a>
                </ListGroup.Item>
                <ListGroup.Item as="li" className='pl-0 pr-0'>
                  <a href="#" className="list-group-item-action">
                    <div className="d-flex w-100 justify-content-between">
                      <h5 className="mb-1">CHEM 110 Preparation for General Chemistry</h5>
                      <small className='text-nowrap'>5 credits</small>
                    </div>
                  </a>
                </ListGroup.Item>
                <ListGroup.Item as="li" className='pl-0 pr-0'>
                  <a href="#" className="list-group-item-action">
                    <div className="d-flex w-100 justify-content-between">
                      <h5 className="mb-1">BIO A 370 Introduction to Primates</h5>
                      <small className='text-nowrap'>5 credits</small>
                    </div>
                  </a>
                </ListGroup.Item>
                <ListGroup.Item as="li" className='pl-0 pr-0 border-bottom-0'>
                  <a href="#" className="list-group-item-action">
                    <div className="d-flex w-100 justify-content-between">
                      <h5 className="mb-1">Gen Ed</h5>
                      <small className='text-nowrap'>4 credits</small>
                    </div>
                  </a>
                </ListGroup.Item>
              </ListGroup>

              <h4 className='text-right'>Total Planned: 19 credits</h4>
            </Card.Body>
          </Card>


          <Card border='light' className='shadow-sm mb-4'>
            <Card.Body>
              <Card.Title as='h3'>Backup Courses</Card.Title>

              <ListGroup variant='flush' as="ul">
                <ListGroup.Item as="li" className='pl-0 pr-0 border-top-0'>
                  <a href="#" className="list-group-item-action">
                    <div className="d-flex w-100 justify-content-between">
                      <h5 className="mb-1">CSE 142 Computer Programming I </h5>
                      <small className='text-nowrap'>5 credits</small>
                    </div>
                  </a>
                </ListGroup.Item>
                <ListGroup.Item as="li" className='pl-0 pr-0'>
                  <a href="#" className="list-group-item-action">
                    <div className="d-flex w-100 justify-content-between">
                      <h5 className="mb-1">CHEM 110 Preparation for General Chemistry</h5>
                      <small className='text-nowrap'>5 credits</small>
                    </div>
                  </a>
                </ListGroup.Item>
                <ListGroup.Item as="li" className='pl-0 pr-0'>
                  <a href="#" className="list-group-item-action">
                    <div className="d-flex w-100 justify-content-between">
                      <h5 className="mb-1">BIO A 370 Introduction to Primates</h5>
                      <small className='text-nowrap'>5 credits</small>
                    </div>
                  </a>
                </ListGroup.Item>
                <ListGroup.Item as="li" className='pl-0 pr-0 border-bottom-0'>
                  <a href="#" className="list-group-item-action">
                    <div className="d-flex w-100 justify-content-between">
                      <h5 className="mb-1">Gen Ed</h5>
                      <small className='text-nowrap'>4 credits</small>
                    </div>
                  </a>
                </ListGroup.Item>
              </ListGroup>

              <h4 className='text-right'>Total Backup: 19 credits</h4>
            </Card.Body>
          </Card>




        </Col>
      </Row>

    </div>);
  }
}
export default Future
