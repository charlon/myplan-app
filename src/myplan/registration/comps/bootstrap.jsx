import React from 'react'
import { Card, Container, Row, Col, Alert, Button, ListGroup}  from 'react-bootstrap'

class BootstrapExample extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {


    return (<div>

      <Row className='mb-3'>
        <Col>

          top portion here

        </Col>
      </Row>
      <Row>
        <Col md={4}>

          <Card className='shadow-sm mb-3'>
            <Card.Body>
              <Card.Title as='h2'>Holds</Card.Title>
              <Card.Text>Here is a list of your holds!</Card.Text>
              <Card.Link href="#">View MyUW</Card.Link>
            </Card.Body>
          </Card>

          <Card className='shadow-sm mb-3'>
            <Card.Body>
              <Card.Title as='h2'>Scheduled Courses</Card.Title>

              <ListGroup variant='flush' as="ul" className='mb-3'>
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

          <Card className='shadow-sm mb-3'>
            <Card.Body>
              <Card.Title as='h2'>Issues</Card.Title>

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
              <Card.Title as='h2'>Registration</Card.Title>

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

              <Row>
                <Col sm={6}>
                  <Card bg='light' className='shadow-sm mt-3 mr-2'>
                    <Card.Body>
                      <Card.Title as='h3'>Priority Registration</Card.Title>
                      <Card.Text>Your estimated priority registration date is <strong>November 4, 2018.</strong> at 6:00am.</Card.Text>
                      <Button variant="primary">Submit using MyPlan</Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col sm={6}>
                  <Card border='light' className='shadow-sm mt-3 ml-2'>
                    <Card.Body>
                      <Card.Title as='h4'>Dropping Courses</Card.Title>
                      <Card.Text>You cannot drop courses using MyPlan. If you need to update your schedule, please visit <strong>SPS Registration</strong>.</Card.Text>
                      <Card.Link href="#">SPS Registration</Card.Link>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>

            </Card.Body>
          </Card>




        </Col>
      </Row>

    </div>);
  }

}

export default BootstrapExample;
