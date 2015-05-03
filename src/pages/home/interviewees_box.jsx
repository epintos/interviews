import React from "react";
import { getData } from "../../common/request";
import IntervieweesForm from "./interviewees_form";
import IntervieweesList from "./interviewees_list";


export default class IntervieweesBox extends React.Component {

  render() {
    return (
      <div class="col-md-3">
        <div class="list-group">
          <IntervieweesForm/>
          <IntervieweesList interviewees={INTERVIEWEES}/>
        </div>
      </div>
    );
  }
}

IntervieweesBox.fetchData = function(params) {
  return getData("/home");
}

var INTERVIEWEES = [
  {firstName: 'First1', lastName: 'Last1'},
  {firstName: 'First2', lastName: 'Last2'},
  {firstName: 'First3', lastName: 'Last3'},
  {firstName: 'First4', lastName: 'Last4'},
  {firstName: 'First5', lastName: 'Last5'},
  {firstName: 'First6', lastName: 'Last6'},
  {firstName: 'First7', lastName: 'Last7'},
  {firstName: 'First8', lastName: 'Last8'}
];

