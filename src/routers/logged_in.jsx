import React from "react";
import Router from "react-router";
let { Route, DefaultRoute, RouteHandler, Link } = Router;

import HomePage from "../pages/home/page";


export default class LoggedInRouter extends React.Component {
  render() {
    return (
      <div id="container-fluid">
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand">Interviews</a>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li><Link to="home">Interviewees</Link></li>
                <li><Link to="home">Exercises</Link></li>
              </ul>
              <form className="navbar-form navbar-right">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Username" value=""/>
                </div>
                <div className="form-group">
                  <input type="password" className="form-control" placeholder="Password" value=""/>
                </div>
                <button className="btn btn-info">Login</button>
              </form>

            </div>
          </div>
        </nav>
        <div className="row-fluid">
          <RouteHandler {...this.props}/>
        </div>
      </div>
    );
  }
}

LoggedInRouter.getRoutes = function() {
  return (
    <Route name="app" path="/" handler={LoggedInRouter}>
      <DefaultRoute name="home" handler={HomePage} />
    </Route>
  );
}
