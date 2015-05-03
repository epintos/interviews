import React from "react";
import { getData } from "../../common/request";


export default class Interviewee extends React.Component {

  render() {
    return (
      <a className="list-group-item">
        {this.props.firstName} {this.props.lastName}
        <span class="pull-right pointer glyphicon glyphicon-chevron-right"/>
      </a>
    );
  }
}

Interviewee.fetchData = function(params) {
  return getData("/home");
}
