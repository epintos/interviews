import React from "react";
import { getData } from "../../common/request";

export default class ExercisesPage extends React.Component {
  componentWillMount() {
    console.log("[ExercisesPage] will mount with server response: ", this.props.data.home);
    debugger
  }

  render() {
    let { title } = this.props.data.home;

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

ExercisesPage.fetchData = function(params) {
  return getData("/exercises");
}
