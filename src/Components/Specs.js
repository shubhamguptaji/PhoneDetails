import React, { Component } from "react";
import { Row, Table, Col, Preloader } from "react-materialize";

var center = {
  textAlign: "center"
};

var loader = {
  marginTop: "200px"
};

var tablecolumn = { textAlign: "center", width: "300px" };

export default class Specs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "",
      name: "",
      data: [],
      count: 0,
      error: ""
    };
  }

  componentDidMount() {
    this.setState({
      brand: this.props.location.state.name,
      name: this.props.location.state.phone
    });
  }

  componentDidUpdate() {
    if (this.state.count !== 1) {
      fetch(`https://mindorks-server.herokuapp.com/${this.state.brand}/${this.state.name}`)
        .then(res => res.json())
        .then(res => this.setState({ data: res, count: 1 }))
        .catch(err => this.setState({ error: err }));
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

    if (this.state.error) {
      return <div center>{this.state.error}</div>;
    }
    return (
      <div>
        <h1 style={center}>{this.state.name}</h1>
        <Row>
          <Col m={3} s={0} />
          <Col m={6} s={12}>
            {this.state.data.length > 0 ? (
              <Table responsive={true} striped={true} hoverable={true}>
                <thead>
                  <tr>
                    <th data-field="property" style={center}>
                      Property Name
                    </th>
                    <th data-field="value">Value</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(this.state.data[0]).map(([key, value]) => (
                    <tr key={key}>
                      <td style={tablecolumn}>{key.charAt(0).toUpperCase() + key.slice(1)}</td>
                      <td>{value}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            ) : (
              <div />
            )}
          </Col>
          <Col s={0} m={3} />
        </Row>
      </div>
    );
  }
}
