import React, { Component } from "react";
import { Row, Col, Card, Preloader } from "react-materialize";

var center = {
  textAlign: "center"
};

var loader = {
  marginTop: "200px"
};

export default class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: true
    };
  }

  componentDidMount() {
    fetch(
      "https://newsapi.org/v2/everything?q=smartphones&from=2019-03-25&sortBy=publishedAt&apiKey=52dea1c96275422c9d9d32ac02eb3eae"
    )
      .then(res => res.json())
      .then(res => this.setState({ data: res.articles, isLoading: false }));
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

    return (
      <div>
        <Row style={center}>
          <h1>Related News</h1>
        </Row>
        <Row>
          {this.state.data.map((d, index) => (
            <Row key={index}>
              <Col s={0} m={2} />
              <Col s={12} m={8}>
                <a href={d.url} target="_blank">
                  <Card title={d.title} className="blue-grey darken-1" />
                </a>
              </Col>
              <Col s={0} m={2} />
            </Row>
          ))}
        </Row>
      </div>
    );
  }
}
