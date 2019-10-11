import React from "react";
import { NavLink } from "react-router-dom";

const ProjectSummary = ({project}) => {
    return(
        <div className="card z-depth-0">
            <div className="card-content grey-text text-darken-3">
                <NavLink to={`/project/${project.id}`}><span className="card-title">{project.title}</span></NavLink>
                <p>Posted by JC</p>
                <p className="grey-text">3rd of Sept, 10AM</p>
            </div>
        </div>
    );
}

export default ProjectSummary;