import { useState, useEffect } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Handles from "../common/Handles";
import '../styles/Content.css'
import { useMediaQuery } from 'react-responsive'
import arrow from '../../assets/down.png';


export default function Homepage() {

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 700px)' })
    const isBigScreen = useMediaQuery({ query: '(min-width: 1024px)' })
    const isSmallScreen = useMediaQuery({ maxWidth: 500 });

    return (
        <div className="container fixed text-center">

            {isBigScreen &&
                <>
                    <h1 className="jobname">Projects</h1>
                        <h3>some of the major projects i've done</h3>

                </>
            }

            {!isBigScreen &&

                <>
                    <h1 className="jobname"> A good Web Developer and a better Machine Learning engineer  </h1>
                    <div className="scroll-down">
                        <img src={arrow} alt="Scroll down" />
                    </div>
                </>
            }


        </div>
    )

}