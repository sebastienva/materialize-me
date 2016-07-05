// @flow
import React, { Component } from 'react';

import { Input } from '../../components';

class InputDemo extends Component {

  state: {
    firstName: string,
    lastName: string,
    email: string,
    disable: string
  };

  constructor() {
    super();

    this.state = {
      firstName: '',
      lastName: '',
      email: 'test',
      disable: "I'm disabled",
    };
  }

  handleFirstName(value: string) {
    this.setState({ firstName: value });
  }

  handleLastName(value: string) {
    this.setState({ lastName: value });
  }

  handleEmail(value: string) {
    this.setState({ email: value });
  }

  handleDisable(value: string) {
    this.setState({ disable: value });
  }

  render() {
    // final render
    return (
      <div>
        <div className="row">
          <div className="input-field col s6">
            <Input value={this.state.firstName} float label="First name" onChange={this.handleFirstName.bind(this)} />
          </div>

          <div className="input-field col s6">
            <Input value={this.state.lastName} label="Last name" onChange={this.handleLastName.bind(this)} />
          </div>
        </div>

        <div className="row">
          <div className="input-field col s6">
            <Input value={this.state.email} float type="email" label="E-mail" error="error" onChange={this.handleEmail.bind(this)} />
          </div>
        </div>

        <div className="row">
          <div className="input-field col s6">
            <Input value={this.state.disable} float type="email" label="Disabled" disabled onChange={this.handleDisable.bind(this)} />
          </div>
        </div>

      </div>
    );
  }
}

export default InputDemo;
