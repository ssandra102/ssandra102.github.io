import { useState, useEffect } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Handles from "../common/Handles";
import '../styles/Content.css'
import { useMediaQuery } from 'react-responsive'


export default function Homepage() {

    const top = "React";
    const bottom = "Developer";
    const [showName, setShowName] = useState([]);
    const [showNameB, setShowNameB] = useState([]);
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 700px)' })
    const isBigScreen = useMediaQuery({ query: '(min-width: 1024px)' })
    const isSmallScreen = useMediaQuery({ maxWidth: 500 });

    return (
        <div className="container fixed text-center">
            {!isTabletOrMobile &&
                <Handles />
            }
            {isBigScreen &&
                <>
                    <h1 className="jobname" >
                    I am a</h1>
                    <h1 className="jobname" >
                    Web Developer.</h1>
                </>
            }

            {!isBigScreen &&
                <h1 className="jobname" > Web Developer </h1>
            }

        </div>
    )

}