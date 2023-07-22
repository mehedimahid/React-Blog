import React, { Component } from "react";
import Axios from "axios";

class HttpGetRequest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      postList: [],
      errMsg: "",
    };
  }
  componentDidMount() {
    Axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response);
        this.setState({ postList: response.data });
      })
      .catch((err) => {
        console.log(err);
        this.setState({ errMsg: "Error Occurred" });
      });
  }
  render() {
    const { postList, errMsg } = this.state;
    return (
      <div>
        List of posts
        {postList.length
          ? postList.map((post) => <div key={post.id}>{post.title}</div>)
          : null}
        {errMsg ? <div style={{ color: "red" }}>{errMsg}</div> : null}
      </div>
    );
  }
}

export default HttpGetRequest;
