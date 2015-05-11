import React from "react";
import { getData } from "../../common/request";


export default class IntervieweesForm extends React.Component {

  render() {
    return (
      <div className="list-group-item">
        <div className="col-md-5">
          <input type="text" className="form-control input-sm" placeholder="First Name" value=""/>
        </div>
        <div className="col-md-5">
          <input type="text" className="form-control input-sm" placeholder="Last Name" value=""/>
        </div>
        <button class="btn btn-success btn-sm">Add</button>
      </div>
    );
  }
}

IntervieweesForm.fetchData = function(params) {
  return getData("/interviewees");
}
