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

      <Row className='mb-2'>
        <Col xs={6}>
          <span className="badge badge-light">Preview</span>
          <h1 className='mt-0 text-nowrap'>Winter 2019</h1>
        </Col>
        <Col xs={6}>



        </Col>
      </Row>

      <Row className='mb-3 d-none'>
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

        <Col md={8} >

          <h2 className="sr-only">Registration Preview (sr-only)</h2>

          <Card bg="light" className='shadow-sm mb-4 pre-reg'>
            <Card.Body>
              <Card.Title as='h3' className="sr-only">Acknowledgements (sr-only)</Card.Title>
              <Card.Text><div><strong>Pre-Registration Requirement</strong><br/>
              Beginning one week prior to each quarter's registration period you can make all the required Notices and Insurance &amp; Optional Charges selections. You will then be able to go directly into SLN Registration when your priority registration period begins. If you have not already done so, <a href="https://sdb.admin.uw.edu/students/uwnetid/op_charges.asp">go to the Insurance &amp; Optional Charges</a> services now to complete these requirements prior to registering for <strong>Winter 2019</strong>.</div></Card.Text>
            </Card.Body>
          </Card>

          <Card className='shadow-sm mb-4'>
            <Card.Body>
              <Card.Title as='h3'>Issues</Card.Title>

              <div className="alert alert-danger issues-alert" role="alert">The following plan items have issues you must resolve before you proceed to Registration. <a href="#">Go to your Winter 2019 plan to resolve these issues.</a></div>

              <ListGroup variant='flush' as="ul">

                <ListGroup.Item as="li" className='pl-0 pr-0 border-top-0'>

                  <h4 className="mb-2 course-header">
                    <input type="checkbox" />
                    <a href="#">CSE 142
                      <div class="course-name">Computer Programming I <span class="badge badge-light border">5 CR</span></div>
                    </a>
                  </h4>

                  <div className="text-danger issues-alert">This is a problem with the course.</div>

                  <Table className="table table-condensed table-bordered table-sm mt-3">
                    <tbody>
                      <tr>
                        <td rowspan="3"><span className="section-cell">A</span></td>
                        <td ><a href="#">54321</a> <span className="badge badge-light border">Lecture</span></td>
                        <td className="half-cell text-right">
                          <span className="badge border border-success text-right">Open</span>&nbsp;
                          <span class="badge badge-light border">5 of 30</span>
                        </td>
                      </tr>
                      <tr>
                        <td colspan="2">

                          <table width="100%" className="table table-borderless m-0">
                            <tr>
                              <td align="left">MTWThF</td>
                              <td align="center">8:30am - 9:20am</td>
                              <td align="right" className="nowrap">BAG 154</td>
                            </tr>
                            <tr>
                              <td align="left">W</td>
                              <td align="center">10:30am - 11:20am</td>
                              <td align="right" className="nowrap">TUL 301</td>
                            </tr>
                          </table>

                        </td>
                      </tr>
                      <tr>
                        <td colspan="2" className="text-danger issues-alert">You haven't added a Quiz section to your plan. Add a Quiz section to register for this course.</td>
                      </tr>
                    </tbody>
                  </Table>

                  <Table className="table table-condensed table-bordered table-sm mt-3">
                    <tbody>
                      <tr>
                        <td rowspan="3"><span className="section-cell">AC</span></td>
                        <td ><a href="#">54321</a> <span className="badge badge-light border">Quiz</span></td>
                        <td className="half-cell text-right">
                          <span className="badge border border-success">Open</span>&nbsp;
                          <span class="badge badge-light border">5 of 30</span>
                        </td>
                      </tr>
                      <tr>
                        <td colspan="2">
                          <table width="100%" className="table table-borderless m-0">
                            <tr>
                              <td align="left">W</td>
                              <td align="center">10:30am - 11:20am</td>
                              <td align="right" className="nowrap">TUL 301</td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td colspan="2" className="text-danger issues-alert">You haven't added a Quiz section to your plan. Add a Quiz section to register for this course.</td>
                      </tr>
                    </tbody>
                  </Table>
                </ListGroup.Item>
                <ListGroup.Item as="li" className='pl-0 pr-0'>

                  <h4 className="mb-2 course-header">
                    <input type="checkbox" />
                    <a href="#">CHEM 110
                      <div className="course-name">Preparation for General Chemistry <span class="badge badge-light border">5 CR</span></div>
                    </a>
                  </h4>

                  <Table className="table table-condensed table-bordered table-sm mt-3">
                    <tbody>
                    <tr>
                      <td rowspan="3"><span className="section-cell">A</span></td>
                      <td ><a href="#">54321</a> <span className="badge badge-light border">Lecture</span></td>
                      <td className="half-cell text-right">
                        <span className="badge border border-success">Open</span>&nbsp;
                        <span className="badge badge-light border">5 of 30</span>
                      </td>
                    </tr>
                    <tr>
                      <td colspan="2">
                        <table width="100%" className="table table-borderless m-0">
                          <tr>
                            <td align="left">MTWThF</td>
                            <td align="center">8:30am - 9:20am</td>
                            <td align="right" className="nowrap">BAG 154</td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td colspan="2" className="text-danger issues-alert">You haven't added a Quiz section to your plan. Add a Quiz section to register for this course.</td>
                    </tr>
                  </tbody>
                </Table>
                <Table className="table table-condensed table-bordered table-sm mt-3">
                  <tbody>
                    <tr>
                      <td rowspan="3"><span className="section-cell">AC</span></td>
                      <td ><a href="#">54321</a> <span className="badge badge-light border">Quiz</span></td>
                      <td className="half-cell text-right">
                        <span className="badge border border-success">Open</span>&nbsp;
                        <span className="badge badge-light border">5 of 30</span>
                      </td>
                    </tr>
                    <tr>
                      <td colspan="2">
                        <span className="tba">Meeting time to be arranged</span>
                      </td>
                    </tr>
                    <tr>
                      <td colspan="2" className="text-danger issues-alert">You haven't added a Quiz section to your plan. Add a Quiz section to register for this course.</td>
                    </tr>
                    </tbody>
                  </Table>
                </ListGroup.Item>

                <ListGroup.Item as="li" className='pl-0 pr-0'>
                  <div>
                    <h4 className="mb-2 course-header">
                      <input type="checkbox" /> BIO 370
                      <div className="course-name">Introduction to Primates <span class="badge badge-light border">4 CR</span></div>
                    </h4>
                  </div>
                  <Table className="table table-condensed table-bordered table-sm mt-3">
                    <tbody>
                      <tr>
                        <td rowspan="3"><span className="section-cell">A</span></td>
                        <td ><a href="#">54321</a> <span className="badge badge-light border">Lecture</span></td>
                        <td className="half-cell text-right">
                          <span className="badge border border-success">Open</span>&nbsp;
                          <span className="badge badge-light border">5 of 30</span>
                        </td>
                      </tr>
                      <tr>
                        <td colspan="2">
                          <table width="100%" className="table table-borderless m-0">
                            <tr>
                              <td align="left">MTWThF</td>
                              <td align="center">8:30am - 9:20am</td>
                              <td align="right" className="nowrap">BAG 154</td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td colspan="2" className="text-danger issues-alert">You haven't added a Quiz section to your plan. Add a Quiz section to register for this course.</td>
                      </tr>
                    </tbody>
                  </Table>
                </ListGroup.Item>
                <ListGroup.Item as="li" className='pl-0 pr-0 '>
                  <div className="d-flex w-100 justify-content-between">
                    <h4 className="mb-2 course-header">
                      <input type="checkbox" />
                      <a href="#">GEN ST 199
                        <div className="course-name">A3 The University Community <span class="badge badge-light border">19 CR</span></div>
                      </a>
                    </h4>
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

            </Card.Body>
          </Card>


          <Card className='shadow-sm mb-4'>
            <Card.Body>
              <Card.Title as='h3'>Ready</Card.Title>

              <div className="course-requirements">
                <span className="code-required"><i class="fas fa-key"></i> Has enrollment restrictions</span>
              </div>

              <ListGroup variant='flush' as="ul" className="list-unstyled">
                <ListGroup.Item as="li" className='pl-0 pr-0'>

                  <h4 className="mb-2 course-header">
                    <input type="checkbox" />
                    <a href="#">CSE 142
                      <div class="course-name">Computer Programming I <span class="badge badge-light border">5 CR</span></div>
                    </a>
                  </h4>

                  <Table className="table table-condensed table-bordered table-sm mt-3">
                    <tbody>
                      <tr>
                        <td rowspan="3"><span className="section-cell">A</span></td>
                        <td ><a href="#">54321</a> <span className="badge badge-light border">Lecture</span></td>
                        <td className="half-cell text-right">
                          <span className="badge border border-success">Open</span>&nbsp;
                          <span className="badge badge-light border">5 of 30</span>
                        </td>
                      </tr>
                      <tr>
                        <td colspan="2">
                          <table width="100%" className="table table-borderless m-0">
                            <tr>
                              <td align="left">MTWThF</td>
                              <td align="center">8:30am - 9:20am</td>
                              <td align="right" className="nowrap">BAG 154</td>
                            </tr>
                            <tr>
                              <td align="left">W</td>
                              <td align="center">10:30am - 11:20am</td>
                              <td align="right" className="nowrap">TUL 301</td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td className="instructor-cell">Mike John Anderson</td>
                        <td>
                          <span className="add-code">Add Code</span>
                          <input type="text" className="form-control" />
                        </td>
                      </tr>
                    </tbody>
                  </Table>

                  <Table className="table table-condensed table-bordered table-sm mt-3">
                    <tbody>
                      <tr>
                        <td rowspan="3"><span className="section-cell">AC</span></td>
                        <td ><a href="#">45638</a> <span className="badge badge-light border">Quiz</span></td>
                        <td className="half-cell text-right">
                          <span className="badge border border-danger">Closed</span>&nbsp;
                          <span className="badge badge-light border">30 of 30</span>
                        </td>
                      </tr>
                      <tr>
                        <td colspan="2">
                          <table width="100%" className="table table-borderless m-0">
                            <tr>
                              <td align="left">MTWThF</td>
                              <td align="center">8:30am - 9:20am</td>
                              <td align="right" className="nowrap">BAG 154</td>
                            </tr>
                            <tr>
                              <td align="left">W</td>
                              <td align="center">10:30am - 11:20am</td>
                              <td align="right" className="nowrap">TUL 301</td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td className="instructor-cell"><span className="tba">Instructor to be arranged</span></td>
                        <td>
                          <span className="add-code">Add Code (required)</span>
                          <input type="text" className="form-control" />
                        </td>
                      </tr>
                    </tbody>
                  </Table>

                </ListGroup.Item>
                <ListGroup.Item as="li" className='pl-0 pr-0'>

                  <h4 className="mb-2 course-header">
                    <input type="checkbox" />
                    <a href="#">CHEM 110
                      <div className="course-name">Preparation for General Chemistry <span class="badge badge-light border">5 CR</span></div>
                    </a>
                  </h4>

                  <Table className="table table-condensed table-bordered table-sm mt-3">
                    <tbody>
                      <tr>
                        <td rowspan="3"><span className="section-cell">A</span></td>
                        <td ><a href="#">54321</a> <span className="badge badge-light border">Lecture</span></td>
                        <td className="half-cell text-right">
                          <span className="badge border border-warning">Suspended</span>
                        </td>
                      </tr>
                      <tr>
                        <td colspan="2">
                          <table width="100%" className="table table-borderless m-0">
                            <tr>
                              <td align="left">MTWThF</td>
                              <td align="center">8:30am - 9:20am</td>
                              <td align="right" className="nowrap">BAG 154</td>
                            </tr>
                            <tr>
                              <td align="left">W</td>
                              <td align="center">10:30am - 11:20am</td>
                              <td align="right" className="nowrap">TUL 301</td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td className="instructor-cell">Mike John Anderson</td>
                        <td>
                          <span className="add-code">Add Code</span>
                          <input type="text" className="form-control" />
                        </td>
                      </tr>
                    </tbody>
                  </Table>

                  <Table className="table table-condensed table-bordered table-sm mt-3">
                    <tbody>
                      <tr>
                        <td rowspan="3"><span className="section-cell">AC</span></td>
                        <td><a href="#">45638</a> <span className="badge badge-light border">Quiz</span></td>
                        <td className="half-cell text-right">
                          <span className="badge border border-success text-right">Open</span>
                          <span className="badge badge-light border">25 of 30</span>
                        </td>
                      </tr>
                      <tr>
                        <td colspan="2">
                          <table width="100%" className="table table-borderless m-0">
                            <tr>
                              <td align="left">W</td>
                              <td align="center">10:30am - 11:20am</td>
                              <td align="right" className="nowrap">TUL 301</td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td className="instructor-cell"><span className="tba">Instructor to be arranged</span></td>
                        <td>
                          <span className="add-code">Add Code</span>
                          <input type="text" className="form-control" />
                        </td>
                      </tr>
                    </tbody>
                  </Table>

                </ListGroup.Item>

                <ListGroup.Item as="li" className='pl-0 pr-0'>

                  <h4 className="mb-2 course-header">
                    <input type="checkbox" />
                    <a href="#">BIO 370
                      <div className="course-name">Introduction to Primates <span class="badge badge-light border">4 CR</span></div>
                    </a>
                  </h4>

                  <Table className="table table-condensed table-bordered table-sm mt-3">
                    <tbody>
                      <tr>
                        <td rowspan="3"><span className="section-cell">A</span></td>
                        <td ><a href="#">54321</a> <span className="badge badge-light border">Lecture</span></td>
                        <td className="half-cell text-right">
                          <span className="badge border border-success">Open</span>&nbsp;
                          <span className="badge badge-light border">5 of 30</span>
                        </td>
                      </tr>
                      <tr>
                        <td colspan="2">
                          <table width="100%" className="table table-borderless m-0">
                            <tr>
                              <td align="left">MTWThF</td>
                              <td align="center">8:30am - 9:20am</td>
                              <td align="right" className="nowrap">BAG 154</td>
                            </tr>
                            <tr>
                              <td align="left">W</td>
                              <td align="center">10:30am - 11:20am</td>
                              <td align="right" className="nowrap">TUL 301</td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td className="instructor-cell">Mike John Anderson</td>
                        <td>
                          <span className="add-code">Add Code</span>
                          <input type="text" className="form-control" />
                        </td>
                      </tr>
                    </tbody>
                  </Table>

                  <Table className="table table-condensed table-bordered table-sm mt-3">
                    <tbody>
                      <tr>
                        <td rowspan="3"><span className="section-cell">AC</span></td>
                        <td ><a href="#">45638</a> <span className="badge badge-light border">Quiz</span></td>
                        <td className="half-cell text-right">
                          <span className="badge border border-success">Open</span>
                          <span className="badge badge-light border">5 of 30</span>
                        </td>
                      </tr>
                      <tr>
                        <td colspan="2">
                          <table width="100%" className="table table-borderless m-0">
                            <tr>
                              <td align="left">MTWThF</td>
                              <td align="center">8:30am - 9:20am</td>
                              <td align="right" className="nowrap">BAG 154</td>
                            </tr>
                            <tr>
                              <td align="left">W</td>
                              <td align="center">10:30am - 11:20am</td>
                              <td align="right" className="nowrap">TUL 301</td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td className="instructor-cell"><span className="tba">Instructor to be arranged</span></td>
                        <td className="add-cell">
                          <span className="add-code">Add Code</span>
                          <input type="text" className="form-control" />
                        </td>
                      </tr>
                    </tbody>
                  </Table>

                </ListGroup.Item>

                <ListGroup.Item as="li" className='pl-0 pr-0'>

                  <h4 className="mb-2 course-header">
                    <input type="checkbox" />
                    <a href="#">COM 497
                      <div className="course-name">Honors Thesis <span class="badge badge-light border">4 CR</span></div>
                    </a>
                  </h4>

                  <Table className="table table-condensed table-bordered table-sm mt-3">
                    <tbody>
                      <tr>
                        <td rowspan="3">
                          <span className="section-cell">A <span className="add-code" title="This course has enrollment restrictions."><i class="fa fa-key"></i></span></span>
                        </td>
                        <td ><a href="#">54321</a> <span className="badge badge-light border">Independent Study</span></td>
                        <td className="half-cell text-right">
                          <span className="badge border border-success">Open</span>
                          <span className="badge badge-light border">5 of 30</span>
                        </td>
                      </tr>
                      <tr>
                        <td colspan="2">
                          <span className="tba">Meeting time to be arranged</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="instructor-cell"><span className="tba">Instructor to be arranged</span></td>
                        <td className="add-cell">
                          <span className="add-code">Faculty Code (required) </span>
                          <input type="text" className="form-control" /></td>
                      </tr>
                    </tbody>
                  </Table>

                </ListGroup.Item>

                <ListGroup.Item as="li" className='pl-0 pr-0 '>

                  <h4 className="mb-2 course-header">
                    <input type="checkbox" />
                    <a href="#">GEN ST 199
                      <div className="course-name">A3 The University Community <span class="badge badge-light border">19 CR</span></div>
                    </a>
                  </h4>

                  <ul className='list-unstyled'>
                    <li>GEN ST 199 A2: University Community TH 1:30-2:20</li>
                    <li>CHEM 142 C: General Chemistry MWF 12:30-1:20</li>
                    <li>CHEM 142 CD T 9:30-10:20 TH 2:30-5:20</li>
                    <li>ENGL 199 H: Linked Writing Course: HSERVE 100 MWF 8:30-9:20</li>
                  </ul>
                </ListGroup.Item>

                <ListGroup.Item as="li" className='pl-0 pr-0 border-bottom-0'>

                  <h4 className="mb-2 course-header">
                    <input type="checkbox" />
                    <a href="#">ART 333
                      <div className="course-name">New Materials and Processes in Glass <span class="badge badge-light border">x CR</span></div>
                    </a>
                  </h4>

                  <ul className='list-unstyled'>
                    <li>ART 333 A: (STUDIO) <a href="#">10448</a> New Materials and Processes in Glass TH 1:30-2:20</li>
                    <li>ART 350 A: (STUDIO) <a href="#">10450</a> Printmaking Special Projects MWF 12:30-1:20</li>
                  </ul>
                </ListGroup.Item>

              </ListGroup>

              <CardDeck className='mt-5'>

                <Card bg='light' className='shadow-sm mr-0'>
                  <Card.Body>
                    <Card.Title as='h4'>Registration</Card.Title>
                    <div className="credit-total">Selected: <span class="badge badge-light border">9 CR</span></div>
                    <Card.Text>Your estimated priority registration date is <strong>November 4, 2018.</strong> at 6:00am.</Card.Text>
                    <Button variant="warning">Throw Over the Wall</Button>
                  </Card.Body>
                </Card>
                <Card className='border-0'>
                  <Card.Body className="p-0">
                    <Card.Title as='h4' className="sr-only">SLN Registration (sr-only)</Card.Title>
                    <Card.Text>Visit the <strong><a href="#">SLN Registration</a></strong> page to add courses by SLN, drop courses, and more.</Card.Text>
                  </Card.Body>
                </Card>
              </CardDeck>

            </Card.Body>
          </Card>

        </Col>

        <Col md={4}>

          <h2 className="sr-only">Quarter Info (sr-only)</h2>

          <Card className='shadow-sm mb-4'>
            <Card.Body>
              <Card.Title as='h3'>Holds</Card.Title>
              <Card.Text>Here is a list of your holds!</Card.Text>
              <Card.Link href="#">View MyUW</Card.Link>
            </Card.Body>
          </Card>

          <Card className='shadow-sm mb-4'>
            <Card.Body>
              <Card.Title as='h3'>Scheduled</Card.Title>

              <ListGroup variant='flush' as='ul' className='mb-4'>
                <ListGroup.Item as="li" className='pl-0 pr-0 border-top-0'>
                  <div className="d-flex w-100 justify-content-between">
                    <h4 className="mb-1">CSE 142 Computer Programming I </h4>
                  </div>
                  <ul className='list-unstyled'>
                    <li>A KNE 130 Tue/Thur 8:30-9:50</li>
                    <li>AC KNE 130 Tue/Thur 8:30-9:50</li>
                  </ul>
                </ListGroup.Item>
                <ListGroup.Item as="li" className='pl-0 pr-0'>
                  <div className="d-flex w-100 justify-content-between">
                    <h4 className="mb-1">GEN ST 199 <span>A2: University Community</span></h4>
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

              <div className='text-right'>Currently Enrolled: 17 credits</div>

              <Card.Link href="#">View MyUW</Card.Link>
            </Card.Body>
          </Card>


        </Col>

      </Row>

    </div>);
  }
}
export default Preview
