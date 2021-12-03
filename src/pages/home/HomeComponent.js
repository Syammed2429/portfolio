import React, { Component } from "react";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import TopButton from "../../components/topButton/TopButton";

class Home extends Component {
  render() {
    // console.log(this.props.theme);
    return (
      <div>
        <Header theme={this.props.theme} onToggle={this.props.onToggle} />
        <Greeting theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Home;
