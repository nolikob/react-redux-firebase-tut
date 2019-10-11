import React, {Component} from "react";
import { createProject } from "../../store/actions/projectActions";
import { connect } from "react-redux";

class CreateProject extends Component {

    state = {
        "title": "",
        "content": ""
    };

    handleChange = event => {
        const {id, value} = event.target;
        this.setState({
            [id]: value
        });
    }

    onSubmit = event => {
        event.preventDefault();
        // calling action that was passed via props
        this.props.createProject(this.state);
    }

    render(){
        return(
            <div className="container">
                <form className="white" onSubmit={this.onSubmit}>
                    <h5 className="grey-text text-darken-3">Create project</h5>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Content</label>
                        <textarea id="content" className="materialize-textarea" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <button className="btn green">Create new project</button>
                    </div>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (project) => dispatch(createProject(project))
    }
}

export default connect(null, mapDispatchToProps)(CreateProject);