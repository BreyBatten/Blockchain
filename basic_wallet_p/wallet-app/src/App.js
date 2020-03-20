import React, { Component } from "react";
import "./App.css";
import Id from "./id";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      updateField: ""
    };

    this.handleSubmitId = this.handleSubmitId.bind(this);
    this.handleChangeId = this.handleChangeId.bind(this);
  }

  handleSubmitId = e => {
    e.preventDefault();
    this.setState(prevState => {
      return {
        id: prevState.updateField,
        updateField: ""
      };
    });
  };

  handleChangeId = e => {
    this.setState({
      updateField: e.target.value
    });
  };

  render() {
    return (
      <div className="App">
        <Id
          id={this.state.id}
          updateField={this.state.updateField}
          handleSubmitId={this.handleSubmitId}
          handleChangeId={this.handleChangeId}
        />
      </div>
    );
  }
}

export default App;
