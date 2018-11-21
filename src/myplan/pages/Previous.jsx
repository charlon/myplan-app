import React from 'react';
import { Row, Col }  from 'react-bootstrap'

import './Previous.scss';

class Previous extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount(){
    document.title = "Summer 2018"
  }

  render() {
    return (
      <div>

      <Row className='mb-4'>
        <Col xs={6}>
          <span className="badge badge-secondary">Previous</span>
          <h1 className='mt-0 text-nowrap'>Summer 2018</h1>
        </Col>
        <Col xs={6}>

          <Row>
            <Col xs={4}>&nbsp;</Col>
            <Col xs={4} className='text-right'>
              <span className="badge badge-light"> -- Previous</span>
              <h6 className='mt-0 font-weight-light text-nowrap'><a href='/preview'>Spring 2018</a></h6>
            </Col>
            <Col xs={4}>
              <span className="badge badge-light">Next --</span>
              <h6 className='mt-0 font-weight-light text-nowrap'><a href='/'>Autumn 2018</a></h6>
            </Col>
          </Row>

        </Col>
      </Row>

      </div>
    );
  }
}
export default Previous
