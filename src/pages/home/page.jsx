import React from "react";
import { getData } from "../../common/request";
import IntervieweesBox from "./interviewees_box";

export default class HomePage extends React.Component {
  componentWillMount() {
    console.log("[HomePage] will mount with server response: ", this.props.data.home);
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

HomePage.fetchData = function(params) {
  return getData("/home");
}
