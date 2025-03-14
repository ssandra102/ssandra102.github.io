
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

    const cardIds = [1, 2, 3, 4, 5, 6, 7];

    return (
        <>
            {/* <Header route="ml-dev" /> */}

            <div className="content-container">
                <div id="showname" >
                    <Homepage />
                </div>

                {isBigScreen &&
                    <>
                        
                        <div className='highlight-cards'>
                            {
                                cardIds.map(id => (
                                    <HighlightCard id={id} />
                                ))
                            }

                        </div>
                    </>
                }
            </div>

            {!isBigScreen &&
                <div className="">

                    {
                        cardIds.map(id => (
                            <HighlightCard id={id} />
                        ))
                    }

                </div>
            }

            <Handles />

        </>
    );
}
