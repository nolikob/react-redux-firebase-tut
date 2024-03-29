import React, {Component} from "react";

class SignUp extends Component {

    state = {
        "firstName": "",
        "lastName": "",
        "email": "",
        "password": ""
    };

    handleChange = event => {
        const {id, value} = event.target;
        this.setState({
            [id]: value
        });
    }

    onSubmit = event => {
        event.preventDefault();
        console.log(this.state);
    }

    render(){
        return(
            <div className="container">
                <form className="white" onSubmit={this.onSubmit}>
                    <h5 className="grey-text text-darken-3">Sign up</h5>
                    <div className="input-field">
                        <label htmlFor="firstName">First name</label>
                        <input type="text" id="firstName" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="lastName">Last name</label>
                        <input type="text" id="lastName" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <button className="btn green">Register</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignUp;