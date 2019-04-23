import React, { Component } from "react";
import { Row, Col } from "react-materialize";

var style = {
  backgroundColor: "#ee6e73",
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  padding: "20px",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "60px",
  width: "100%"
};

var phantom = {
  display: "block",
  padding: "20px",
  height: "60px",
  width: "100%"
};

export default class Footers extends Component {
  render() {
    return (
      <div>
        <div style={phantom} />
        <div style={style}>
          <Row>
            <Col s={0} m={3} />
            <Col s={12} m={3}>
              <span>&copy; 2018 Copyright</span>
            </Col>
            <Col s={12} m={3}>
              <span>
                <a href="http://github.com/shubhamguptaji" target="_blank">
                  <img src="../../github.svg" height="30px" width="30px" />
                </a>
              </span>
            </Col>
            <Col s={0} m={3} />
          </Row>
        </div>
      </div>
    );
  }
}
