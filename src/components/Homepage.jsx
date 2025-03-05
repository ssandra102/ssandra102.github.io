import { useState, useEffect } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Handles from "./Handles";
import './styles/Content.css'
import { useMediaQuery } from 'react-responsive'


export default function Homepage() {

    const name = "SandraSkaria";
    const [showName, setShowName] = useState([]);
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 700px)' })
    const isBigScreen = useMediaQuery({ query: '(min-width: 1024px)' })
    const isSmallScreen = useMediaQuery({ maxWidth: 500 });


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
        const interval = setInterval(animateName, name.length * 150 + 5000);

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);
    return (
        <div className="container fixed text-center">
            {isBigScreen &&
                <h1 className="name text-4xl font-bold mb-4">
                    {showName.join("")}</h1>
            }

            {!isBigScreen &&
                <h1 className="name text-4xl font-bold mb-4"> Sandra Skaria </h1>
            }
{/* 
            <div
                style={{
                    display: "flex",
                    flexDirection: isSmallScreen ? "column" : "row",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                }}
            > <div
                style={{
                    display: "flex",
                    flexDirection: isSmallScreen ? "column" : "row",
                    gap: "10px",
                }}
            >
                    <button>About</button>
                    <button>Projects</button>
                    <button>Blog</button>
                </div>

                <div style={{
                    display: "flex",
                    gap: "10px"
                }}
                >
                    <Handles />
                </div>
            </div> */}



            <div >
                <div className="mt-4 flex gap-4">
                    {!isBigScreen &&
                        <AnchorLink href="#about">
                            <button>
                                About
                            </button>
                        </AnchorLink>
                    }

                    <AnchorLink href="#projects">
                        <button >
                            Projects
                        </button>
                    </AnchorLink>
                    <AnchorLink href="#blog">
                        <button>
                            Blog
                        </button>
                    </AnchorLink>
                </div>
            </div>
            {!isTabletOrMobile &&
                <Handles />
            }

        </div>
    )

}