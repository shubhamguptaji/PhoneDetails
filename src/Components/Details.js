import React, { Component } from "react";
import { Row, Card, Col, Preloader } from "react-materialize";
import { Link } from "react-router-dom";

var center = {
  textAlign: "center"
};

var loader = {
  marginTop: "200px"
};

export default class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      name: "",
      count: 0
    };
  }

  componentDidMount() {
    this.setState({ name: this.props.location.state.name });
  }

  componentDidUpdate(prevprops) {
    if (this.state.count !== 1) {
      fetch(`https://mindorks-server.herokuapp.com/ ${this.state.name}`)
        .then(res => res.json())
        .then(res => {
          console.log(res);
          this.setState({ data: res, count: 1 });
        });
    }
  }
  render() {
    if (this.state.count !== 1) {
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

    return (
      <div>
        <Row>
          <h1 style={center}>{this.state.name}</h1>
        </Row>
        <Row>
          {this.state.data.map((r, index) => (
            <Col s={12} m={4} key={index}>
              <Link
                to={{ pathname: "/specs", state: { name: this.state.name, phone: r.DeviceName } }}>
                <Card title={r.DeviceName} />
              </Link>
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}
