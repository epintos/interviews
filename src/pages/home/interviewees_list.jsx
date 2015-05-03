import React from "react";
import { getData } from "../../common/request";
import Interviewee from "./interviewee";


export default class IntervieweesList extends React.Component {

  render() {
    var interviewees = []
    this.props.interviewees.forEach(function(interviewee) {
      interviewees.push(<Interviewee firstName={interviewee.firstName} lastName={interviewee.lastName}/>);
    });
    return (
     <div>{interviewees}</div>
    );
  }
}

IntervieweesList.fetchData = function(params) {
  return getData("/home");
}
