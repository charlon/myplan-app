import React from 'react';
import queryString from "query-string";
import createBrowserHistory from "history/createBrowserHistory";

import './common.scss';

const history = createBrowserHistory()
console.log(history);
const values = queryString.parse(history.location.search)

const isHybrid = values.hybrid
console.log(isHybrid) // "hybrid"


function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

class Common extends React.Component {

  render() {

    return (

      <section>

        <Greeting isLoggedIn={true} />

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
                  <li><i className="fas fa-user" /></li>
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

          <div className="com-gray-bar">
            <div className="com-container">
              <main role="main" className="com-main">
                {this.props.children}
              </main>
            </div>
          </div>
        </div>

      </section>

    );
  }

}

export default Common;
