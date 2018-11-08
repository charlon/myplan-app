import React from 'react'
import { Card, Alert, Button, ListGroup}  from 'react-bootstrap'

class BootstrapExample extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {


    return (<div>

      <Card className='shadow-sm'>
        <Card.Body>
          <Card.Title as='h2'>Registration</Card.Title>

          <Alert variant='success' className='mb-0'>There are ready!</Alert>

          <ListGroup variant='flush' as="ul">
            <ListGroup.Item as="li" className='pl-0 pr-0 border-top-0'>
              <a href="#" className="list-group-item-action">
                <div className="d-flex w-100 justify-content-between">
                  <h5 className="mb-1">CSE 142 Computer Programming I (4)</h5>
                  <small>5 credits</small>
                </div>
                <p class="mb-1">A KNE 130 Tue/Thur 8:30-9:50</p>
                <p class="mb-1">AC KNE 130 Tue/Thur 8:30-9:50</p>
              </a>
            </ListGroup.Item>
            <ListGroup.Item as="li" className='pl-0 pr-0'>
              <a href="#" className="list-group-item-action">
                <div className="d-flex w-100 justify-content-between">
                  <h5 className="mb-1">CSE 142 Computer Programming I (4)</h5>
                  <small>5 credits</small>
                </div>
                <p class="mb-1">A KNE 130 Tue/Thur 8:30-9:50</p>
                <p class="mb-1">AC KNE 130 Tue/Thur 8:30-9:50</p>
              </a>
            </ListGroup.Item>
            <ListGroup.Item as="li" className='pl-0 pr-0'>
              <a href="#" className="list-group-item-action">
                <div className="d-flex w-100 justify-content-between">
                  <h5 className="mb-1">CSE 142 Computer Programming I (4)</h5>
                  <small>5 credits</small>
                </div>
                <p class="mb-1">A KNE 130 Tue/Thur 8:30-9:50</p>
                <p class="mb-1">AC KNE 130 Tue/Thur 8:30-9:50</p>
              </a>
            </ListGroup.Item>
            <ListGroup.Item as="li" className='pl-0 pr-0 border-bottom-0'>
              <a href="#" className="list-group-item-action">
                <div className="d-flex w-100 justify-content-between">
                  <h5 className="mb-1">CSE 142 Computer Programming I (4)</h5>
                  <small>5 credits</small>
                </div>
                <p class="mb-1">A KNE 130 Tue/Thur 8:30-9:50</p>
                <p class="mb-1">AC KNE 130 Tue/Thur 8:30-9:50</p>
              </a>
            </ListGroup.Item>
          </ListGroup>

          <Card bg='light' className='shadow-sm'>
            <Card.Body>
              <Card.Title as='h3'>Priority Registration</Card.Title>
              <Card.Text>Your estimated priority registration date is <strong>November 4, 2018.</strong> at 6:00am.</Card.Text>
              <Button variant="primary">Submit using MyPlan</Button>
            </Card.Body>
          </Card>

        </Card.Body>
      </Card>

      <Card className='shadow-sm mt-3'>
        <Card.Body>
          <Card.Title as='h2'>Dropping Courses</Card.Title>
          <Card.Text>You cannot drop courses using MyPlan. If you need to update your schedule, please visit <strong>SPS Registration</strong>.</Card.Text>
          <Card.Link href="#">SPS Registration</Card.Link>
        </Card.Body>
      </Card>

    </div>);
  }

}

export default BootstrapExample;
