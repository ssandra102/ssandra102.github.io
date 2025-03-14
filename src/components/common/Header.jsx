import React from 'react'
import '../styles/header.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive'
import DropdownMenu from './DropdownMenu';

export default function Header({ route }) {

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 700px)' })
    const isBigScreen = useMediaQuery({ query: '(min-width: 1024px)' })
    const isSmallScreen = useMediaQuery({ maxWidth: 500 });


    return (
        <>
            {isBigScreen && route === "/" &&
                <div className='nav-container'>
                    {/* <nav className='nav-left'>
                        <AnchorLink href='#'> sandra skaria </AnchorLink>
                    </nav>
                    <nav className='nav-right'>
                        <AnchorLink href='#'> looking for a ml egineer? </AnchorLink>
                    </nav> */}
                </div>
            }

            {isBigScreen && route === "reactdev" &&
                <div className='nav-container'>
                    <nav className='nav-left'>
                        <Link to={'/'} >sandra skaria </Link>
                    </nav>
                    <nav className='nav-right'>
                    <Link to={'/ml-dev'} > looking for a ml engineer? </Link>
                    </nav>
                </div>
            }


            {isBigScreen && route === "ml-dev" &&
                <div className='nav-container'>
                    <nav className='nav-left'>
                        <Link to={'/'}>sandra skaria </Link>
                    </nav>
                    <nav className='nav-right'>
                        <Link to={'/reactdev'}>looking for a react dev?</Link>
                    </nav>
                </div>
            }


            {!isBigScreen && route === "homepage" &&
                <div className='nav-container'>
                    {/* <nav className='nav-left smallscreen-nav'>
                        <AnchorLink href='#'> sandra skaria </AnchorLink>
                    </nav> */}
                    <DropdownMenu />
                </div>
            }

            {!isBigScreen && route === "reactdev" &&
                <div className='nav-container'>
                    <nav className='nav-left smallscreen-nav'>
                        <Link to={'/'}>sandra skaria </Link>
                    </nav>
                </div>
            }

            {!isBigScreen && route === "ml-dev" &&
                <div className='nav-container'>
                    <nav className='nav-left smallscreen-nav'>
                        <Link to={'/'}> sandra skaria </Link>
                    </nav>
                </div>
            }
        </>
    )
}