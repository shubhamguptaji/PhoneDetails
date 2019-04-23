import React, { Component } from "react";
import { Row, Col, Button, TextInput } from "react-materialize";

var full = {
  width: "100%"
};

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  render() {
    return (
      <div>
        <Row>
          <Col m={5} s={0} />
          <Col m={3} s={12}>
            <TextInput placeholder="Enter Username" label="Username" />
          </Col>
          <Col m={4} s={0} />
        </Row>
        <Row>
          <Col m={5} s={0} />
          <Col m={3} s={12}>
            <TextInput placeholder="Enter Password" label="Password" type="password" />
          </Col>
          <Col m={4} s={0} />
        </Row>
        <Row>
          <Col m={5} s={0} />
          <Col m={2} s={12}>
            <Button style={full}>Login</Button>
          </Col>
          <Col m={5} s={0} />
        </Row>
      </div>
    );
  }
}
