import { useState } from "react";
import './styles/card.css'
import projectsData from './data/projectsData.js'

export default function Card(props) {

    return (
        <>
            <div className="card"
                style={{ backgroundImage: `url(${projectsData[props.id - 1].imgsrc})` }}
            >
                <div className="card-details">
                    <h4> {projectsData[props.id - 1].name} </h4> 
                    <p> Stack : {projectsData[props.id - 1].stack} </p> 
                    <a href={projectsData[props.id - 1].link}> Code </a>
                </div>
            </div>
        </>
    )
}