import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import List from "./components/List.jsx";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:3000/allItems")
      .then((response) => this.setState({ items: response.data }))
      .then((response) => console.log(this.state.items));
  }

  // componentDidMount() {
  //   $.ajax({
  //     url: "/items",
  //     success: (data) => {
  //       this.setState({
  //         items: data,
  //       });
  //     },
  //     error: (err) => {
  //       console.log("err", err);
  //     },
  //   });
  // }

  render() {
    return (
      <div>
        <nav className="topnav">Green Shop</nav>
        <h2>welcome in Green Grocery</h2>
        <h3>where every thing is healthy</h3> <List items={this.state.items} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
