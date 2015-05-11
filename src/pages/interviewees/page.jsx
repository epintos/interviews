import React from "react";
import { getData } from "../../common/request";
import IntervieweesBox from "./interviewees_box";

export default class IntervieweesPage extends React.Component {
  componentWillMount() {
    console.log("[IntervieweesPage] will mount with server response: ", this.props.data.interviewees);
  }

  render() {
    let { title } = this.props.data.interviewees;

    return (
      <div className="container-fluid">
        <div className="row-fluid">
          <div className="col-md-3">
            <IntervieweesBox/>
          </div>
        </div>
      </div>
    );
  }
}

IntervieweesPage.fetchData = function(params) {
  return getData("/interviewees");
}
