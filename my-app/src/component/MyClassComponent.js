import React, { Component } from "react";

export class MyClassComponent extends Component {
  state = {
    count: 0,
    date: new Date(),
  };
  componentDidMount() {
    const { count } = this.state;
    document.title = `Cliked ${count} times`;
    setInterval(this.click, 1000);
  }
  componentDidUpdate() {
    const { count } = this.state;
    document.title = `Cliked ${count} times`;
  }

  addClick = () => {
    this.setState(({ count }) => ({ count: count + 1 }));
  };
  click = () => {
    this.setState({
      date: new Date(),
    });
  };
  render() {
    const { date } = this.state;
    return (
      <div>
        <p>Time: {date.toLocaleTimeString()}</p>
        <p>
          <button type="button" onClick={this.addClick}>
            click
          </button>
        </p>
      </div>
    );
  }
}

export default MyClassComponent;
