import React, { Component } from 'react';
import './App.css';
import swal from 'sweetalert';

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty

  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  //validate form was filled

  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  })

  return valid
}


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: null,
      lastName: null,
      email: null,
      age: null,
      mobileno: null,
      college: null,
      city: null,
      state: null,
      formErrors: {
        firstName: '',
        lastName: '',
        email: '',
        age: '',
        mobileno: '',
        college: '',
        city: '',
        state: ''
      },
      value: "",
      qualification: ''
    }
  }

  handleRadioChange(event) {
    this.setState(
      { value: event.target.value }
    )
  }

  handleSubmit = (event) => {
    event.preventDefault();



    if (formValid(this.state)) {
      console.log(`
      SUBMITTING
      First Name : ${this.state.firstName}
      Last Name : ${this.state.lastName}
      Email : ${this.state.email}
      Age : ${this.state.age}
      Mobileno : ${this.state.mobileno}
      College : ${this.state.college}
      City : ${this.state.city}
      State : ${this.state.state}
      Sex : ${this.state.value}
      Qualification : ${this.state.qualification}
      `)


      swal(`SUBMITTING
      First Name : ${this.state.firstName}
      Last Name : ${this.state.lastName}
      Email : ${this.state.email}
      Age : ${this.state.age}
      Mobileno : ${this.state.mobileno}
      College : ${this.state.college}
      City : ${this.state.city}
      State : ${this.state.state}
      Sex : ${this.state.value}
      Qualification : ${this.state.qualification}`)
    }
    else {
      console.error('FORM INVALID - DISPLAY ERROR MESSAGE');
    }
  }

  handleChange = event => {
    event.preventDefault();
    const { name } = event.target;
    const { value } = event.target;
    let formErrors = this.state.formErrors;

    switch (name) {
      case 'firstName':
        formErrors.firstName =
          value.length < 3 && value.length > 0
            ? 'minimum threee characters required' : '';
        break;

      case 'lastName':
        formErrors.lastName =
          value.length < 3 && value.length > 0 ? 'minimum three characters required' : '';
        break;

      case 'email':
        formErrors.email =
          emailRegex.test(value) ? '' : 'invalid email address';
        break;

      case 'age':
        formErrors.age =
          value.length < 1 ? 'minimum one number required' : '';
        break;

      case 'mobileno':
        formErrors.mobileno =
          value.length < 9 ? 'minimum nine numbers required' : '';
        break;

      case 'college':
        formErrors.college =
          value.length < 2 ? 'minimum two characters required' : '';
        break;

      case 'city':
        formErrors.city =
          value.length < 2 ? 'minimum two characters required' : '';
        break;

      case 'state':
        formErrors.state =
          value.length < 2 ? 'minimum two characters required' : '';
        break;


      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state))

  };


  render() {

    const { formErrors } = this.state;

    return <div className="wrapper">
      <div className="form-wrapper">
        <h1>Enter Your Details</h1>
        <form onSubmit={this.handleSubmit} noValidate>


          <div className="firstName">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              maxLength="15"
              className={formErrors.firstName.length > 0 ? "error" : null}
              placeholder="First Name"
              noValidate
              name="firstName"
              onChange={this.handleChange}
            />
            {formErrors.firstName.length > 0 && (
              <span className="errorMessage" > {formErrors.firstName} </span>
            )}

          </div>


          <div className="lastName">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              maxLength="15"
              className={formErrors.lastName.length > 0 ? "error" : null}
              placeholder="Last Name"
              noValidate
              name="lastName"
              onChange={this.handleChange}
            />

            {formErrors.lastName.length > 0 && (
              <span className="errorMessage" > {formErrors.lastName} </span>
            )}
          </div>


          <div className="email">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              maxLength="20"
              className={formErrors.email.length > 0 ? "error" : null}
              placeholder="Email"
              noValidate
              name="email"
              onChange={this.handleChange}
            />
            {formErrors.email.length > 0 && (
              <span className="errorMessage" > {formErrors.email} </span>
            )}
          </div>

          <div className="qualification">
            <label htmlFor="qualification :" >Qualifications</label>
            <select name="qualification" onChange={this.handleChange}>
              <option value="under graduate">Under Graduate</option>
              <option value="graduate">Graduate</option>
              <option value="post graduate">Post Graduate</option>
              <option value="doctorate">Doctorate</option>
            </select>
          </div>


          <div className="age">
            <label htmlFor="age">Your Age</label>
            <input
              type="number"
              className={formErrors.age.length > 0 ? "error" : null}
              placeholder="Age"
              noValidate
              name="age"
              onChange={this.handleChange}
            />
            {formErrors.age.length > 0 && (
              <span className="errorMessage" > {formErrors.age} </span>
            )}
          </div>

          <div className="gender">
            <label>gender:{this.state.value}</label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={this.state.value === "male"}
              onChange={this.handleRadioChange.bind(this)}
            />
            <input
              type="radio"
              name="gender"
              value="female"
              checked={this.state.value === "female"}
              onChange={this.handleRadioChange.bind(this)} />
          </div>


          <div className="mobileno">
            <label htmlFor="mobileno">Mobile No.</label>
            <input type="number"
              className={formErrors.mobileno.length > 0 ? "error" : null}
              placeholder="Mobile No."
              noValidate
              name="mobileno"
              onChange={this.handleChange}
            />
            {formErrors.mobileno.length > 0 && (
              <span className="errorMessage" > {formErrors.mobileno} </span>
            )}
          </div>


          <div className="college">
            <label htmlFor="college">Your College</label>
            <br />
            <input
              type="text"
              maxLength="20"
              className={formErrors.college.length > 0 ? "error" : null}
              placeholder="College"
              noValidate
              name="college"
              onChange={this.handleChange}
            />
            {formErrors.college.length > 0 && (
              <span className="errorMessage" > {formErrors.college} </span>
            )}
          </div>


          <div className="city">
            <label htmlFor="city">Your City</label>
            <input
              type="text"
              maxLength="15"
              className={formErrors.city.length > 0 ? "error" : null}
              placeholder="city"
              noValidate
              name="city"
              onChange={this.handleChange}
            />
            {formErrors.city.length > 0 && (
              <span className="errorMessage" > {formErrors.city} </span>
            )}
          </div>

          <div className="state">
            <label htmlFor="state">Your State</label>
            <input
              type="text"
              maxLength="15"
              className={formErrors.state.length > 0 ? "error" : null}
              placeholder="state"
              noValidate
              name="state"
              onChange={this.handleChange}
            />
            {formErrors.state.length > 0 && (
              <span className="errorMessage" > {formErrors.state} </span>
            )}
          </div>


          <div className="submitDetails">
            <button type="submit"> Submit </button>
          </div>
        </form>
      </div>
    </div>
  }
}

export default App;
