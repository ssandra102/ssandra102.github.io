
import { useMediaQuery } from 'react-responsive'
import Homepage from "./Homepage";
import '../styles/Content.css'
import About from "./About";
import Header from '../common/Header';
import Projects from '../ml-dev/Projects';
import HighlightCard from '../Card/HighlightCard';
import Handles from '../common/Handles';


export default function Content() {

    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' })
    const isBigScreen = useMediaQuery({ query: '(min-width: 1024px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 700px)' })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

    return (
        <>
            {/* <Header route="ml-dev" /> */}

            <span className="vertical-text">HEY THERE!!</span>

            <div className="content-container">
                <div id="showname" className="bg-gray-900 text-white top-left" >
                    <Homepage />
                </div>

                {isBigScreen &&
                    <>
                        <div className="about-container" id="about-container">


                            {/* <Projects cardIds={[1, 2, 3, 4, 5, 6]} /> */}
                            <About />
                        </div>
                        <div className='highlight-cards'>
                            <HighlightCard id={1} />
                            <HighlightCard id={2} />
                            <HighlightCard id={3} />
                            <HighlightCard id={4} />
                            <HighlightCard id={5} />
                            <HighlightCard id={6} />
                            <HighlightCard id={7} />

                        </div>
                    </>
                }
            </div>

            {!isBigScreen &&
                <div className="mini-about-container">

                    {/* <About />
                    <Projects cardIds={[1, 2, 3, 4, 5, 6]} /> */}
                    <HighlightCard id={1} />
                    <HighlightCard id={2} />
                    <HighlightCard id={3} />
                    <HighlightCard id={4} />
                    <HighlightCard id={5} />
                    <HighlightCard id={6} />
                    <HighlightCard id={7} />

                </div>
            }

            <Handles />

        </>
    );
}
