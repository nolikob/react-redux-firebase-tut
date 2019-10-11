import React, {Component} from "react";

class SignIn extends Component {

    state = {
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
                    <h5 className="grey-text text-darken-3">Sign in</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <button className="btn green">Login</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;