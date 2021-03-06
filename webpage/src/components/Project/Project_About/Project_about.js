import React from 'react';
import './Project_about.scoped.css';
import ProjectInput from './Project_Input/Project_input.js';
import DrawingBoard from './Drawing Board/DrawingBoard';

function Project_about(props) {
    return (
        <div className="Project-about">
            <div className="Project-about-context">
                <h3>{props.algorithm}</h3>
                <h5>{props.subheading}</h5>
                <div>{props.description}</div>
            </div>
            {props.name !== "Digit Recongnition" ? <ProjectInput {...props} /> : <DrawingBoard {...props} />}
        </div>
    )
}

export default Project_about
