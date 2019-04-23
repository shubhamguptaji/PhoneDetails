import React, { Component } from "react";
import { Card, Row, Col, Preloader } from "react-materialize";
import { Link } from "react-router-dom";

var style = {
  minHeight: "200px",
  textAlign: "center",
  marginLeft: "30px",
  marginRight: "30px"
};

var center = {
  textAlign: "center"
};

var loader = {
  marginTop: "200px"
};

export default class LatestDevices extends Component {
  constructor(props) {
    super(props);
    this.state = {
      devices: [],
      isLoading: true,
      error: ""
    };
  }

  componentDidMount() {
    fetch("https://mindorks-server.herokuapp.com/latest")
      .then(res => res.json())
      .then(res => this.setState({ devices: res, isLoading: false }))
      .catch(err => this.setState({ error: err }));
  }

  render() {
    if (this.state.isLoading) {
      return (
        <Row>
          <Col s={12} m={5} />
          <Col s={12} m={2} style={loader}>
            <Preloader flashing size="big" />
          </Col>
          <Col s={12} m={5} />
        </Row>
      );
    }

    if (this.state.error) {
      return <div style={center}>{this.state.error}</div>;
    }

    return (
      <div>
        <Row>
          <h1 style={center}>Latest Smartphones Launched</h1>
        </Row>
        <Row>
          {this.state.devices.map((device, index) => (
            <Col m={4} s={12} key={index}>
              <Link
                to={{
                  pathname: "/specs",
                  state: { name: device.DeviceName.split(" ")[0], phone: device.DeviceName }
                }}>
                <Card
                  className="blue-grey darken-1"
                  textClassName="white-text"
                  style={style}
                  title={device.DeviceName}
                />
              </Link>
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}
