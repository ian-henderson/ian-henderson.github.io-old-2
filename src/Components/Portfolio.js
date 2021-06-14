import React from "react"
import Fade from "react-reveal"
// import Zmage from "react-zmage"

export default function Portfolio({ data }) {
    if (!data) return null

    /*
    function renderProjectItem({ image, title }, index) {
        return (
            <div key={index} className="columns portfolio-item">
                <div className="item-wrap">
                    <Zmage alt={title} src={`images/portfolio/${image}`} />
                    <div style={{ textAlign: "center" }}>{title}</div>
                </div>
            </div>
        )
    }
    */

    return (
        <section id="portfolio">
            <Fade left duration={1000} distance="40px">
                <div className="row">
                    <div className="twelve columns collapsed">
                        <h1>Projects Coming soon!</h1>
                        {/*
                        <h1>Check Out Some of My Works.</h1>
                        <div
                            id="portfolio-wrapper"
                            className="bgrid-quarters s-bgrid-thirds cf"
                        >
                            {projects.map(renderProjectItem)}
                        </div>
                         */}
                    </div>
                </div>
            </Fade>
        </section>
    )
}
