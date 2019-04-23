import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Card } from "react-materialize";

const data = [
  "Apple",
  "Xiaomi",
  "Asus",
  "Oppo",
  "Vivo",
  "Realme",
  "Lenovo",
  "Nokia",
  "OnePlus",
  "HTC",
  "LG",
  "Micromax"
];

var style = {
  minHeight: "200px",
  textAlign: "center",
  marginLeft: "30px",
  marginRight: "30px"
};

var center = {
  textAlign: "center"
};

export default class Home extends Component {
  render() {
    return (
      <div>
        <Row>
          <h2 style={center}>Choose a Brand</h2>
        </Row>
        <Row>
          {data.map((brand, index) => (
            <Col m={4} s={12} key={index}>
              <Link to={{ pathname: "/details", state: { name: brand } }}>
                <Card
                  className="blue-grey darken-1"
                  textClassName="white-text"
                  style={style}
                  title={brand}
                />
              </Link>
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}
