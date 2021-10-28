import React, { Component } from "react";
import Confirm from "./Confirm";
import FormPersonal from "./FormPersonal";
import UserDetails from "./UserDetails";
import Success from "./Success";

export class UserForm extends Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    occupation: "",
    city: "",
    bio: "",
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  // Handle fields change
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const { firstName, lastName, email, occupation, city, bio } = this.state;
    const values = { firstName, lastName, email, occupation, city, bio };
    switch (step) {
      case 1:
        return (
          <div>
            <UserDetails
              nextStep={this.nextStep}
              handleChange={this.handleChange}
              values={values}
            />
          </div>
        );
      case 2:
        return (
          <div>
            <FormPersonal
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={values}
            />
          </div>
        );
      case 3:
        return (
            <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
            />
        );
      case 4:
        return <Success />;
    }
  }
}

export default UserForm;
