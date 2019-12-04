import React, { Component } from "react";

export default class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      view: "home"
    };
  }

  componentDidMount() {
    this.setState({ view: "nothome" });
  }

  render() {
    const { view } = this.state;
    const { data } = this.props;

    if (view === "home")
      return (
        <div>
          Home <br />
          {data.num} - {data.name}
        </div>
      );

    return <div>{view}</div>;
  }
}
