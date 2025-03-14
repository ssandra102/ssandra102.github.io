
import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useMediaQuery } from 'react-responsive'

import '../styles/Content.css'
import Handles from '../common/Handles.jsx';
import About from "./About.jsx";
import Sidebar from "../common/Sidebar.jsx";
import Header from '../common/Header.jsx';
import Footer from '../common/Footer.jsx';
// import Swiper from "./Carousel.jsx";
import Carousel from "./Carousel.jsx";


export default function Content({ route }) {

    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' })
    const isBigScreen = useMediaQuery({ query: '(min-width: 1024px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(min-width: 500px) and (max-width: 1023px)' })
    const isSmallScreen = useMediaQuery({ query: '(max-width: 500px)' })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })

    return (
        <>
            <Header route="homepage" />
            
            {isBigScreen &&
                <>
                    <div className="content-container">
                        <div className="about-container" id="about-container">
                            <About />
                            <Handles />
                        </div>
                    </div>
                </>
            }

            {isTabletOrMobile &&
                <div className="tablet-about-container">
                    <About />
                    <div className="card-carousel">
                        <Carousel />
                    </div>
                </div>
            }

            {isSmallScreen &&
                <div className="mini-about-container">
                    <About />
                    <div className="card-carousel">
                        <Carousel />
                    </div>
                </div>
            }

        </>
    );
}
