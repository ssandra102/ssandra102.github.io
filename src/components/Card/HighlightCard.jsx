import React from "react";
import './styles/highlight.css'
import projectsData from './data/projectsData.js'
import { Link } from "react-router-dom";


const HighlightCard = (props) => {
    const id = props.id;
    const page = props.page;

    return (
        <div className="card">
            {/* Title */}
            <h2 className="card-title">
                {projectsData[id - 1].name}
            </h2>

            {/* Images */}
            {/* <div className="image-container">
        <img src="/image1.png" alt="Molecule 1" className="card-image" />
      </div> */}

            {/* Highlights */}
            <div className="highlights">
                <h3>Highlights</h3>
                <ul>
                    
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
