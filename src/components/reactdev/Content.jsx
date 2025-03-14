
import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Card from "../Card/Card";
import AnchorLink from "react-anchor-link-smooth-scroll";
import '../styles/Content.css'
import arrow from '../../assets/arrow.jpg'
import Handles from '../common/Handles';
import About from "./About";
import Sidebar from "../common/Sidebar";
import { useMediaQuery } from 'react-responsive'
import Homepage from "./Homepage";
import Header from '../common/Header'
import Projects from "../reactdev/Projects";

export default function Content({route}) {

    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' })
    const isBigScreen = useMediaQuery({ query: '(min-width: 1024px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 700px)' })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

    return (
        <>  
            <Header route="reactdev" />
            
            <div className="content-container">
                {/* <Sidebar /> */}
                <div id="showname" className="bg-gray-900 text-white" >
                    <Homepage />
                    <Projects cardIds={[6]}/>
                </div>

                {isBigScreen &&
                    <div className="about-container" id="about-container">
                        <About />
                    </div>
                }
            
            </div>
            
            {!isBigScreen &&
                <div className="mini-about-container">
                    <About />
                </div>
            }
            
        </>
    );
}
