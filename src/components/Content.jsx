
import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Card from "./Card/Card";
import AnchorLink from "react-anchor-link-smooth-scroll";
import './styles/Content.css'
import arrow from '../assets/arrow.jpg';
import Handles from './Handles';
import About from "./About";
import Sidebar from "./Sidebar";


export default function Content() {
    // const navigate = useNavigate();
    const name = "sandra skaria";
    const [showName, setShowName] = useState([]);
    
    useEffect(() => {
        const animateName = () => {
            const letters = name.split("");
            setShowName(letters.map(() => " ")); // Reset

            letters.forEach((letter, index) => {
                setTimeout(() => {
                    setShowName((prev) => {
                        const newArr = [...prev];
                        newArr[index] = letter;
                        return newArr;
                    });
                }, index * 150);
            });
        };

        animateName(); // Run once initially

        // Run the animation every few seconds
        const interval = setInterval(animateName, name.length * 150 + 1000);

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    return (
        <div className="content-container">
            {/* <Sidebar /> */}


            <div id="showname" className="bg-gray-900 text-white" >

                <div className="container fixed text-center">
                    <h1 className="name text-4xl font-bold mb-4">
                        {/* {showName.join("")}</h1> */}
                        Sandra Skaria </h1>
                    <div className="buttons flex gap-4 justify-center">
                        <div className="mt-4 flex gap-4">
                            <AnchorLink href="#projects">
                                <button className="px-4 py-2 bg-blue-600 rounded-lg">
                                    Projects
                                </button>
                            </AnchorLink>
                            <AnchorLink href="#blog">
                                <button className="px-4 py-2 bg-blue-600 rounded-lg">
                                    Blog
                                </button>
                            </AnchorLink>
                        </div>
                    </div>
                    <Handles />

                </div>
            </div>

            {/* <div id="showname" className="about-image-arrow"
                style={{ backgroundImage: `url(${arrow})` }}
            > */}
            <div className="about-container" id="about-container">
                <About />
            </div>



        </div>
    );
}
