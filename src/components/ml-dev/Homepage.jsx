import { useState, useEffect } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Handles from "../common/Handles";
import '../styles/Content.css'
import { useMediaQuery } from 'react-responsive'
import arrow from '../../assets/down.png';


export default function Homepage() {

    const name = "ML";
    const nameB = "Engineer";
    const [showName, setShowName] = useState([]);
    const [showNameB, setShowNameB] = useState([]);

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 700px)' })
    const isBigScreen = useMediaQuery({ query: '(min-width: 1024px)' })
    const isSmallScreen = useMediaQuery({ maxWidth: 500 });

    return (
        <div className="container fixed text-center">

            {isBigScreen &&
                <>
                    {/* <p>I'm a</p> */}
                    <h1 className="jobname">
                        My name is Sandra Skaria</h1>

                </>
            }

            {!isBigScreen &&

                <>
                    <h1 className="jobname"> A good web developer and a better Machine Learning engineer  </h1>
                    <div className="scroll-down">
                        <img src={arrow} alt="Scroll down" />
                    </div>
                </>
            }


        </div>
    )

}