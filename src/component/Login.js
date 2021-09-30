import React, { Component } from 'react'

// Regular expressions for Validations

const regForEmail = RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
const regForCity = RegExp(/^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/);
const regForSate = RegExp(/[A-Z][a-z]+(?: +[A-Z][a-z]+)*/);
const regForZip = RegExp(/^(\d{4}|\d{6})$/);

// Class Component

export class Login extends Component {

    //Class Constructor and Sate Data

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            errors: {
                email: '',
                pass: '',
                city: '',
                state: '',
                zip: ''
            }
        };
    }

    //onChange Event Handler with validation handling

    onChangeUser = (event) => {
        const { name, value } = event.target;
        let errors = this.state.errors;
        switch (name) {
            case 'email':
                errors.email = regForEmail.test(value) ? '' : 'Email is not valid';
                break;
            case 'pass':
                errors.pass = value.length < 8 ? 'Password must be 8 characters long' : '';
                break;
            case 'city':
                errors.city = regForCity.test(value) ? '' : 'City is not valid';
                break;
            case 'state':
                errors.state = regForSate.test(value) ? '' : 'State is not valid';
                break;
            case 'zip':
                errors.zip = regForZip.test(value) ? '' : 'ZipCode is not valid';
                break;
        }
        this.setState({ [name]: value });
    }

    //onClick Event Handler with Error Handling

    onSubmitButton = (event) => {
        event.preventDefault();
        event.target.reset();
        let { items, email, pass, city, state, zip } = this.state;

        if (this.validate(this.state.errors)) {
            alert("Valid Form, Please Check Data Below !");
            this.setState({
                items: [...items, { email: email, pass: pass, city: city, state: state, zip: zip }]
            });
        }
        else {
            alert("Invalid Form !!");
        }


    };

    //Validating input Lengths

    validate = (errors) => {
        let valid = true;
        Object.values(errors).forEach((val) => val.length > 0 && (valid = false));

        return valid;
    }

    //Rendering Contents on React (Displaying) 

    render() {
        const { errors } = this.state;
        return (
            <>
                <div className="p-3 mb-2 bg-warning text-dark">
                    <div className="container text-left">
                        <h2><center>Log IN</center></h2>
                        <hr />

                        <div className="jumbotron">

                            {/* Form Control with Grid System*/}

                            <form onSubmit={this.onSubmitButton}>
                                <div className="form-group">
                                    <div className="form-row">

                                        <div className="col">
                                            <label for="exampleInputEmail1">Email address</label>
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="inputGroupPrepend"><i className="fas fa-user"></i></span>
                                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name="email" onChange={this.onChangeUser} required />
                                            </div>
                                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                            <small id="emailHelp" className="form-text text-danger font-italic">{this.state.errors.email}</small>
                                        </div>


                                        <div className="col">
                                            <label for="exampleInputPassword1">Password</label>
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="inputGroupPrepend"><i class="fas fa-key"></i></span>
                                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name="pass" onChange={this.onChangeUser} required />
                                            </div>
                                            <small id="emailHelp" className="form-text text-danger font-italic">{this.state.errors.pass}</small>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div class="form-row">

                                        <div class="col-md-6 mb-3">
                                            <label for="validationDefault03">City</label>
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="inputGroupPrepend"><i className="fas fa-city"></i></span>
                                                <input type="text" class="form-control" id="validationDefault03" placeholder="City" name="city" onChange={this.onChangeUser} required />
                                            </div>
                                            <small id="emailHelp" className="form-text text-danger font-italic">{this.state.errors.city}</small>
                                        </div>

                                        <div class="col-md-3 mb-3">
                                            <label for="validationDefault04">State</label>
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="inputGroupPrepend"><i className="fas fa-globe-asia"></i></span>
                                                <input type="text" class="form-control" id="validationDefault04" placeholder="State" name="state" onChange={this.onChangeUser} required />
                                            </div>
                                            <small id="emailHelp" className="form-text text-danger font-italic">{this.state.errors.state}</small>
                                        </div>

                                        <div class="col-md-3 mb-3">
                                            <label for="validationDefault05">Zip</label>
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="inputGroupPrepend"><i className="fas fa-map-pin"></i></span>
                                                <input type="text" class="form-control" id="validationDefault05" placeholder="Zip" name="zip" onChange={this.onChangeUser} required />
                                            </div>
                                            <small id="emailHelp" className="form-text text-danger font-italic">{this.state.errors.zip}</small>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" onChange={this.onChangeUser} />
                                    <label className="form-check-label" for="exampleCheck1">Keep me login</label>
                                </div>
                                <br />

                                <button type="submit" className="btn btn-primary">Submit</button> &nbsp;&nbsp;
                                <button type="reset" className="btn btn-danger">Reset</button>

                            </form>
                            <hr />
                            <br />

                            {/* Social Media Login */}

                            <div className="text-center">
                                <i className="fab fa-facebook" style={{ fontSize: '30px' }}></i> &nbsp;&nbsp;
                                <i className="fab fa-twitter" style={{ fontSize: '30px' }}></i> &nbsp;&nbsp;
                                <i className="fab fa-google-plus" style={{ fontSize: '30px' }}></i> &nbsp;&nbsp;
                                <i className="fab fa-pinterest" style={{ fontSize: '30px' }}></i>
                            </div>
                        </div>

                        {/* Rendering form Data into Table */}

                        <div className="jumbotron">
                            <h4>RECENT LOGIN's</h4>
                            <br />
                            <table className="table table-striped table-dark table-hover text-center">
                                <thead>
                                    <tr>
                                        <th>Sr. No.</th>
                                        <th>Email ID</th>
                                        <th>Password</th>
                                        <th>City</th>
                                        <th>State</th>
                                        <th>ZipCode</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {/* Map Function to return and displaying data */}

                                    {this.state.items.map((item, index) => {
                                        return (
                                            <tr>
                                                <td>{index + 1}</td>
                                                <td>{item.email}</td>
                                                <td>{item.pass}</td>
                                                <td>{item.city}</td>
                                                <td>{item.state}</td>
                                                <td>{item.zip}</td>
                                            </tr>
                                        )
                                    })
                                    }
                                </tbody >
                            </table >
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Login
