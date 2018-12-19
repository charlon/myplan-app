import 'rc-steps/assets/index.css';
import 'rc-steps/assets/iconfont.css';
import React from 'react';
import { Card, CardDeck, Row, Col, Alert, Button, ListGroup, Table }  from 'react-bootstrap';
import Steps from 'rc-steps';

import UserProfile from '../components/UserProfile.jsx';

import './Preview.scss';

class Preview extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount(){
    document.title = "Winter 2019"
  }

  render() {

    return (<div>

      <Row className='mb-4'>
        <Col xs={6}>
          <span className="badge badge-secondary">Preview</span>
          <h1 className='mt-0 text-nowrap'>Winter 2019</h1>
        </Col>
        <Col xs={6}>

          <Row>
            <Col xs={4}>&nbsp;</Col>
            <Col xs={4} className='text-right'>
              <span className="badge badge-light"> -- Previous</span>
              <h6 className='mt-0 font-weight-light text-nowrap'><a href='/'>Autumn 2018</a></h6>
            </Col>
            <Col xs={4}>
              <span className="badge badge-light">Next --</span>
              <h6 className='mt-0 font-weight-light text-nowrap'><a href='/future'>Spring 2019</a></h6>
            </Col>
          </Row>

        </Col>
      </Row>

      <Row className='mb-3'>
        <Col className='d-md-none'>

          <Steps size='small' direction="vertical" current={2}>
            <Steps.Step title="Published" description='Fix the errors that we found with your plan' />
            <Steps.Step title="Acknowledgements" description='1 week prior to Registration.' />
            <Steps.Step title="Registration" description='Its go time! Youre priority registration is Nov. 2, 2018' />
            <Steps.Step title="Quarter Begins" description='asdfasf' />
          </Steps>

        </Col>
        <Col className='d-none d-md-block'>

          <Steps direction='horizontal' current={2}>
            <Steps.Step title="Published" description='Fix the errors that we found with your plan' />
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

          <Card className='shadow-sm mb-4'>
            <Card.Body>
              <Card.Title as='h4'>Scheduled Courses</Card.Title>

              <ListGroup variant='flush' as='ul' className='mb-4'>
                <ListGroup.Item as="li" className='pl-0 pr-0 border-top-0'>
                  <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">CSE 142 Computer Programming I </h5>
                  </div>
                  <ul className='list-unstyled'>
                    <li>A KNE 130 Tue/Thur 8:30-9:50</li>
                    <li>AC KNE 130 Tue/Thur 8:30-9:50</li>
                  </ul>
                </ListGroup.Item>
                <ListGroup.Item as="li" className='pl-0 pr-0 border-bottom-0'>
                  <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">GEN ST 199 A2: University Community</h5>
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
                </ListGroup.Item>
              </ListGroup>

              <h4 className='text-right'>Currently Enrolled: 17 credits</h4>

              <Card.Link href="#">View MyUW</Card.Link>
            </Card.Body>
          </Card>


        </Col>
        <Col md={8}>

          <Card className='shadow-sm mb-4'>
            <Card.Body>
              <Card.Title as='h3'>Issues</Card.Title>

              <Alert variant='danger' className='mb-0'>These courses have issues!</Alert>

              <ListGroup variant='flush' as="ul">
                <ListGroup.Item as="li" className='pl-0 pr-0 border-top-0'>
                  <div>
                    <h5 className="mb-1">CSE 142 - Computer Programming I (5)</h5>
                  </div>
                  <Table className="table-bordered table-responsive table-sm">
                    <thead>
                      <tr>
                        <th>Section</th>
                        <th>SLN</th>
                        <th>Type</th>
                        <th className="text-danger">Issue</th>
                        <th>Meeting Time &amp; Location</th>
                        <th>Instructor</th>
                        <th>Enr. Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>A</td>
                        <td>54321</td>
                        <td>Lecture</td>
                        <td className="text-danger">askldfj asdlfj aslkfdj ;lasdkfj alskdf</td>
                        <td>MWF 8:30am - 9:20am BAG 154</td>
                        <td>Anderson</td>
                        <td>Open 5 of 200</td>
                      </tr>
                      <tr>
                        <td>AC</td>
                        <td>45638</td>
                        <td>Quiz</td>
                        <td className="text-danger">askldfj asdlfj aslkfdj ;lasdkfj alskdf</td>
                        <td>TTh 10:30am 0 11:20am</td>
                        <td>--</td>
                        <td>Open 5 of 30</td>
                      </tr>
                    </tbody>
                  </Table>
                </ListGroup.Item>
                <ListGroup.Item as="li" className='pl-0 pr-0'>
                  <div>
                    <h5 className="mb-1">CHEM 110 - Preparation for General Chemistry (5)</h5>
                  </div>
                  <Table className="table-bordered table-responsive table-sm">
                    <thead>
                      <tr>
                        <th>Section</th>
                        <th>SLN</th>
                        <th>Type</th>
                        <th className="text-danger">Issue</th>
                        <th>Meeting Time &amp; Location</th>
                        <th>Instructor</th>
                        <th>Enr. Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>A</td>
                        <td>54321</td>
                        <td>Lecture</td>
                        <td className="text-danger">askldfj asdlfj aslkfdj ;lasdkfj alskdf</td>
                        <td>MWF 8:30am - 9:20am BAG 154</td>
                        <td>Anderson</td>
                        <td>Open 5 of 200</td>
                      </tr>
                      <tr>
                        <td>AC</td>
                        <td>45638</td>
                        <td>Quiz</td>
                        <td className="text-danger">askldfj asdlfj aslkfdj ;lasdkfj alskdf</td>
                        <td>TTh 10:30am 0 11:20am</td>
                        <td>--</td>
                        <td>Open 5 of 30</td>
                      </tr>
                    </tbody>
                  </Table>
                </ListGroup.Item>
                <ListGroup.Item as="li" className='pl-0 pr-0'>
                  <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">BIO 370 - Introduction to Primates (5)</h5>
                  </div>
                  <Table className="table-bordered table-responsive table-sm">
                    <thead>
                      <tr>
                        <th>Section</th>
                        <th>SLN</th>
                        <th>Type</th>
                        <th className="text-danger">Issue</th>
                        <th>Meeting Time &amp; Location</th>
                        <th>Instructor</th>
                        <th>Enr. Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>A</td>
                        <td>54321</td>
                        <td>Lecture</td>
                        <td className="text-danger">You haven't added a Quiz section to your plan. Add a Quiz section to register for this course.</td>
                        <td>MWF 8:30am - 9:20am BAG 154</td>
                        <td>Anderson</td>
                        <td>Open 5 of 200</td>
                      </tr>
                    </tbody>
                  </Table>
                </ListGroup.Item>
                <ListGroup.Item as="li" className='pl-0 pr-0 border-bottom-0'>
                  <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">GEN ST 199 - The University Community (19)</h5>
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
                </ListGroup.Item>
              </ListGroup>

              <h4 className='text-right'>Currently Planned: 19 credits</h4>

            </Card.Body>
          </Card>


          <Card className='shadow-sm'>
            <Card.Body>
              <Card.Title as='h3'>Ready</Card.Title>

              <Alert variant='success' className='mb-0'>These courses are ready!</Alert>

              <ListGroup variant='flush' as="ul" className="list-unstyled">
                <ListGroup.Item as="li" className='pl-0 pr-0 border-top-0'>
                  <div>
                    <h5 className="mb-1"><input type="checkbox" /> CSE 142 - Computer Programming I (5)</h5>
                  </div>
                  <Table className="table-bordered table-responsive table-sm">
                    <thead>
                      <tr>
                        <th>Section</th>
                        <th>SLN</th>
                        <th>Type</th>
                        <th>Add Code</th>
                        <th>Meeting Time &amp; Location</th>
                        <th>Instructor</th>
                        <th>Enr. Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>A</td>
                        <td>54321</td>
                        <td>Lecture</td>
                        <td><input type="text" /></td>
                        <td>MWF 8:30am - 9:20am BAG 154</td>
                        <td>Anderson</td>
                        <td>Open 5 of 200</td>
                      </tr>
                      <tr>
                        <td>AC</td>
                        <td>45638</td>
                        <td>Quiz</td>
                        <td><input type="text" /></td>
                        <td>TTh 10:30am 0 11:20am</td>
                        <td>--</td>
                        <td>Open 5 of 30</td>
                      </tr>
                    </tbody>
                  </Table>
                </ListGroup.Item>
                <ListGroup.Item as="li" className='pl-0 pr-0'>
                  <div>
                    <h5 className="mb-1"><input type="checkbox" /> CHEM 110 - Preparation for General Chemistry (5)</h5>
                  </div>
                  <Table className="table-bordered table-responsive table-sm">
                    <thead>
                      <tr>
                        <th>Section</th>
                        <th>SLN</th>
                        <th>Type</th>
                        <th>Add Code</th>
                        <th>Meeting Time &amp; Location</th>
                        <th>Instructor</th>
                        <th>Enr. Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>A</td>
                        <td>54321</td>
                        <td>Lecture</td>
                        <td><input type="text" /></td>
                        <td>MWF 8:30am - 9:20am BAG 154</td>
                        <td>Anderson</td>
                        <td>Open 5 of 200</td>
                      </tr>
                      <tr>
                        <td>AC</td>
                        <td>45638</td>
                        <td>Quiz</td>
                        <td><input type="text" /></td>
                        <td>TTh 10:30am 0 11:20am</td>
                        <td>--</td>
                        <td>Open 5 of 30</td>
                      </tr>
                    </tbody>
                  </Table>
                </ListGroup.Item>
                <ListGroup.Item as="li" className='pl-0 pr-0'>
                  <div>
                    <h5 className="mb-1"><input type="checkbox" /> BIO 370 - Introduction to Primates (4)</h5>
                  </div>
                  <Table className="table-bordered table-responsive table-sm">
                    <thead>
                      <tr>
                        <th>Section</th>
                        <th>SLN</th>
                        <th>Type</th>
                        <th>Add Code</th>
                        <th>Meeting Time &amp; Location</th>
                        <th>Instructor</th>
                        <th>Enr. Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>A</td>
                        <td>54321</td>
                        <td>Lecture</td>
                        <td><input type="text" /></td>
                        <td>MWF 8:30am - 9:20am BAG 154</td>
                        <td>Anderson</td>
                        <td>Open 5 of 200</td>
                      </tr>
                      <tr>
                        <td>AC</td>
                        <td>45638</td>
                        <td>Quiz</td>
                        <td><input type="text" /></td>
                        <td>TTh 10:30am 0 11:20am</td>
                        <td>--</td>
                        <td>Open 5 of 30</td>
                      </tr>
                    </tbody>
                  </Table>
                </ListGroup.Item>
                <ListGroup.Item as="li" className='pl-0 pr-0 border-bottom-0'>
                  <div>
                    <h5 className="mb-1"><input type="checkbox" /> GEN ST 199 - The University Community (19)</h5>
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
                </ListGroup.Item>
              </ListGroup>

              <h4 className='text-right'>Currently Planned: 19 credits</h4>

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
                    <Card.Title as='h4'>SPS Registration</Card.Title>
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
export default Preview
