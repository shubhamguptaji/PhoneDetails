import React, { Component } from "react";
import { Route } from "react-router-dom";
import LatestDevices from "./LatestDevices";
import Navbars from "./Navbar";
import Home from "./Home";
import Details from "./Details";
import Login from "./Login";
import News from "./News";
import Specs from "./Specs";
import Footers from "./Footer";

var top = { marginTop: "100px", minHeight: "500px" };

class App extends Component {
  render() {
    return (
      <div>
        <Navbars />
        <div style={top}>
          <Route exact path="/" component={LatestDevices} />
          <Route path="/brand" component={Home} />
          <Route path="/details" component={Details} />
          <Route path="/login" component={Login} />
          <Route path="/news" component={News} />
          <Route path="/specs" component={Specs} />
        </div>
        <Footers />
      </div>
    );
  }
}

export default App;
