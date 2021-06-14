import ParticlesBg from "particles-bg"
import React from "react"
import Fade from "react-reveal"

export default function Header({ data }) {
    if (!data) return null

    const { description, linkedIn, github, name } = data

    return (
        <header id="home">
            <ParticlesBg type="circle" bg />
            <nav id="nav-wrap">
                <a
                    className="mobile-btn"
                    href="#nav-wrap"
                    title="Show navigation"
                >
                    Show navigation
                </a>
                <a className="mobile-btn" href="#home" title="Hide navigation">
                    Hide navigation
                </a>
                <ul id="nav" className="nav">
                    <li className="current">
                        <a className="smoothscroll" href="#home">
                            Home
                        </a>
                    </li>
                    <li>
                        <a className="smoothscroll" href="#about">
                            About
                        </a>
                    </li>
                    <li>
                        <a className="smoothscroll" href="#resume">
                            Resume
                        </a>
                    </li>
                    <li>
                        <a className="smoothscroll" href="#portfolio">
                            Projects
                        </a>
                    </li>
                    {/*
                    <li>
                        <a className="smoothscroll" href="#contact">
                            Contact
                        </a>
                    </li>
                    */}
                </ul>
            </nav>

            <div className="row banner">
                <div className="banner-text">
                    <Fade bottom>
                        <h1 className="responsive-headline">{name}</h1>
                    </Fade>
                    <Fade bottom duration={1200}>
                        <h3>{description}</h3>
                    </Fade>
                    <hr />
                    <Fade bottom duration={2000}>
                        <ul className="social">
                            <a
                                className="button btn linkedin-btn"
                                href={linkedIn}
                                rel="noreferrer"
                                target="_blank"
                            >
                                <i className="fa fa-linkedin"></i>LinkedIn
                            </a>
                            <a
                                className="button btn github-btn"
                                href={github}
                                rel="noreferrer"
                                target="_blank"
                            >
                                <i className="fa fa-github"></i>Github
                            </a>
                        </ul>
                    </Fade>
                </div>
            </div>
            <p className="scrolldown">
                <a className="smoothscroll" href="#about">
                    <i className="icon-down-circle"></i>
                </a>
            </p>
        </header>
    )
}
