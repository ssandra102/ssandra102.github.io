import React from 'react'
import './styles/header.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';


export default function Header() {

    return (
        <>
            <nav>
                <AnchorLink href='#'>About</AnchorLink>
                <AnchorLink href='#projects'>Projects</AnchorLink>
                <AnchorLink href='#blog'>Blog</AnchorLink>
            </nav>
        </>
    )
}