import React, { Component } from "react";

class Id extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>Create or change your Id here</h2>
        <p>Current Id: {this.props.id}</p>

        <form onSubmit={this.props.handleSubmitId}>
          <input
            type="text"
            placeholder="Id"
            value={this.props.updateField}
            onChange={this.props.handleChangeId}
          />
        </form>
      </div>
    );
  }
}

export default Id;
