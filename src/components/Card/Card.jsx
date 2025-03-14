import { useState } from "react";
import './styles/card.css'
import projectsData from './data/projectsData.js'
import homepageData from "./data/homepageData.js";
import { useMediaQuery } from 'react-responsive'

export default function Card(props) {

    const id = props.id;
    const page = props.page;

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' })
    const isBigScreen = useMediaQuery({ query: '(min-width: 1024px)' })
    const isSmallScreen = useMediaQuery({ maxWidth: 500 });

    return (
        <>
            {page !== "homepage" &&
                <div class="card-container">
                    <div className="card"
                        style={{
                            backgroundColor: "white",
                            width: "180px",
                            height: isTabletOrMobile ? "150px": "250px",
                            padding: "5px",
                            paddingRight: "0px",
                        }}
                    >
                        <p className="card-text">{projectsData[id - 1].name}</p>
                        {/* <img src={projectsData[id - 1].imgsrc} alt="Project" className="card-image" /> */}
                        {/* <div className="card-details"> */}
                        <a href={projectsData[id - 1].link} target="_blank" color="black"> view code </a>
                    {/* </div> */}
                    </div>

                    <div className="card"
                        style={{
                            backgroundColor: "black",
                            width: "180px",
                            height: isTabletOrMobile ? "150px": "250px",
                            padding: "5px",
                            paddingLeft: "0px",
                        }}
                    >
                        <p className="card-stack"> Stack : {projectsData[id - 1].stack} </p>
                        {/* <a href={projectsData[id - 1].link} target="_blank" color="black"> {projectsData[id - 1].name} </a>
                    </div> */}
                    </div>

                </div>

            }
            {page === "homepage" &&
                <div className="card-homepage"
                // style={{ backgroundImage: `url(${homepageData[id - 1].imgsrc})` }}
                >
                    <img src={homepageData[id - 1].imgsrc} alt="Project" className="card-image" />
                    {/* <div className="card-details">
                    <a href={homepageData[id - 1].link} target="_blank"> {homepageData[id - 1].name} </a>
                </div> */}
                </div>
            }
        </>
    )
}