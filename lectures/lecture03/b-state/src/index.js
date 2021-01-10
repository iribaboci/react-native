import React from "react";
import ReactDOM from "react-dom";
//import App from "./App";

const style = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increateCount() {
    //merge {count: 0}, {this.state.count + 1}, {count: state.count + 1}

    // It will increase only one because it will merge like explained above
    //this.setState({ count: this.state.count + 1 });
    //this.setState({ count: this.state.count + 1 });

    // here is going to store the prevState and increase by two
    this.setState((prevState) => ({ count: prevState.count + 1 }));
    this.setState((prevState) => ({ count: prevState.count + 1 }));

    console.log(this.state.count);
  }

  render() {
    return (
      <div style={style}>
        <div>
          <button onClick={() => this.increateCount()}>Increase</button>
        </div>
        <h2>{this.state.count}</h2>
      </div>
    );
  }
}

let count = 1;

const rootElement = document.getElementById("root");

setInterval(
  () =>
    ReactDOM.render(
      <React.StrictMode>
        <App count={count} />
      </React.StrictMode>,
      rootElement
    ),
  1000
);
