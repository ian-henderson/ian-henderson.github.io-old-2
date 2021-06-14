import React from "react"
import Fade from "react-reveal"

export default function Footer({ data }) {
    if (!data) return null

    function renderSocialItem({ className, name, url }) {
        return (
            <li key={name}>
                <a href={url} rel="noreferrer" target="_blank">
                    <i className={className}></i>
                </a>
            </li>
        )
    }

    return (
        <footer>
            <div className="row">
                <Fade bottom>
                    <div className="twelve columns">
                        <ul className="social-links">
                            {data.social.map(renderSocialItem)}
                        </ul>
                        <ul className="copyright">
                            <li>&copy; Copyright 2021 Ian Henderson</li>
                            <li>
                                Design by{" "}
                                <a
                                    title="Styleshout"
                                    href="http://www.styleshout.com/"
                                >
                                    Styleshout
                                </a>
                            </li>
                        </ul>
                    </div>
                </Fade>
                <div id="go-top">
                    <a
                        className="smoothscroll"
                        title="Back to Top"
                        href="#home"
                    >
                        <i className="icon-up-open"></i>
                    </a>
                </div>
            </div>
        </footer>
    )
}
