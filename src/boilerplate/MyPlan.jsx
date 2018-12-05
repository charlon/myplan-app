import React from 'react'
import { Button, OverlayTrigger, Popover }  from 'react-bootstrap'
import queryString from "query-string"
import createBrowserHistory from "history/createBrowserHistory"

import UserData from '../data/students.json'
import './MyPlan.scss';

const history = createBrowserHistory()
const values = queryString.parse(history.location.search)

const popover = (
  <Popover id="popover-basic" title="Switch Student...">
    <ul className="list-unstyled">
      {UserData.map((userDetail, index) => {
        return <li key={userDetail.id}><span>{userDetail.name}</span></li>
      })}
    </ul>
  </Popover>
);

const Example = () => (
  <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
    <Button variant="link" className='p-0'><i className="fas fa-user" /></Button>
  </OverlayTrigger>
);


class MyPlan extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isHybrid: false,
    }

  }

  componentDidMount() {
    this.setState({ isHybrid: values.hybrid });
  }

  render() {

    console.log(this.state.isHybrid)

    if (this.state.isHybrid) {

      return (<section>

          <div className="com-body">
            <div className="com-hybrid">
              <div className="com-container">
                  <main role="main" className="com-main">
                    {this.props.children}
                  </main>
              </div>
            </div>
          </div>

        </section>);

    } else {

      return (<section>

          <header role="banner" className="com-header">
            <div className="com-thin-bar">
              <div className="com-container">
                <div className="com-links">
                  <ul>
                    <li>MyUW</li>
                    <li>UW.edu</li>
                  </ul>
                </div>
                <div className="com-user">
                  <ul>
                    <li><Example /></li>
                    <li><i className="fas fa-question-circle" /></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="com-masthead">
              <div className="com-container">
                <div className="com-title-mobile">
                  <button className="com-title-button" id="nav_button">
                    <span className="fa-stack fa-2x com-title-button-icon" aria-hidden="true">
                      <i className="far fa-square fa-stack-2x" />
                      <i className="fa fa-bars fa-stack-1x" />
                    </span>
                  </button>
                  <span><a href='/'>MyPlan</a></span>
                </div>
                <div className="com-title-desktop">
                  <button className="com-title-button" id="nav_button">
                    <span className="fa-stack fa-2x com-title-button-icon" aria-hidden="true">
                      <i className="far fa-square fa-stack-2x" />
                      <i className="fa fa-bars fa-stack-1x" />
                    </span>
                  </button>
                  <span><a href='/'>MyPlan</a></span>
                </div>
              </div>
            </div>
          </header>

          <div className="com-body">
            <div className="com-web">
              <div className="com-container">
                <main role="main" className="com-main">
                  {this.props.children}
                </main>
              </div>
            </div>
          </div>

        </section>);


    }


  }

}

export default MyPlan;
