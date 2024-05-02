import { Component } from "react";

export class MyComponent extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      error: null,
    };
  }
  async componentDidMount() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      if (!response.ok)
        throw new Error("Response is not OK, Please check and correct API");
      const jsonData = await response.json();
      this.setState({
        data: jsonData,
      });
    } catch (error) {
      this.setState({
        error: error,
      });
    }
  }
  render() {
    const { data, error } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else {
      const usrData = data.map((value) => (
        <li key={value.id}>{value.title}</li>
      ));
      return (
        <div>
          Fetching Data From API
          <ul>{usrData}</ul>
        </div>
      );
    }
  }
}
