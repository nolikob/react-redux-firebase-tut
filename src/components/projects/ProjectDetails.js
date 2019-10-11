import React from "react";

const ProjectDetails = (props) => {
    const id = props.match.params.id;
    return(
        <div className="container section">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project title - {id}</span>
                    <p>fnowds oveovnoenoivneroinvoi enoiv enmrk en orine oivne i</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>POsted by me</div>
                    <div>2nd september</div>
                </div>
            </div>
        </div>
    );
}

export default ProjectDetails;
