import React from "react";
import './styles/highlight.css'
import projectsData from './data/projectsData.js'
import { Link } from "react-router-dom";


const HighlightCard = (props) => {
    
    const id = props.id;
    const page = props.page;

    return (
        <div className="card" >
            <h2 className="card-title" style={{color:"#85B09A"}}>
                {projectsData[id - 1].name}
            </h2>
            <div className="highlights">
                <h3 style={{color:"#72A0C1"}}>Highlights</h3>
                <ul style={{color:"#cacac8"}}>
                    {projectsData[id - 1].description.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
            </div>

            <Link to={projectsData[id - 1].link}><button className="github">🐙 GitHub repo </button></Link>
            <p className="tags">
                <strong style={{ paddingLeft: "5px" }}> Tags:</strong> {projectsData[id - 1].stack}
            </p>
        </div>
    );
};

export default HighlightCard;
