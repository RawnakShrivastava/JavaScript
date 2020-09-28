import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/css/style.css";

class Home extends Component {
  render() {
    return (
      <div className="main">
        <div className="first">
          <div className="reset">Reset</div>
          <Button variant="primary" className="resetpass">
            Set Password
          </Button>{" "}
        </div>
        <div className="first">
          <div className="reset">Reset</div>
          <Button variant="primary" className="resetpass">
            Set Password
          </Button>{" "}
        </div>
        <div className="first">
          <div className="reset">Reset</div>
          <Button variant="primary" className="resetpass">
            Set Password
          </Button>{" "}
        </div>
      </div>
    );
  }
}

export default Home;
