import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/css/style.css";

class Home extends Component {
  render() {
    return (
      <div className="main">
        <div className="first">
          <span className="reset">Reset Password</span>
          <Button variant="Success" className="resetpass">
            Set Password
          </Button>{" "}
        </div>
        <div className="second">
          <div className="reset">set</div>
        </div>
        <div className="third">
          <div className="reset">Delete my Account</div>
          <Button variant="Danger" className="delacc">
            Delete Account
          </Button>{" "}
        </div>
      </div>
    );
  }
}

export default Home;
