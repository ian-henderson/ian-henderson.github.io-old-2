import React from "react"
import Slide from "react-reveal"

export default function Resume({ data }) {
    if (!data) return null

    const { education, skills, work } = data

    function renderEducationItem({ degree, description, graduated, school }) {
        return (
            <div key={school}>
                <h3>{school}</h3>
                <p className="info">
                    {degree} <span>&bull;</span>
                    <em className="date">{graduated}</em>
                </p>
                <p>{description}</p>
            </div>
        )
    }

    function renderWorkItem({ company, description, title, years }) {
        return (
            <div key={company}>
                <h3>{company}</h3>
                <p className="info">
                    {title}
                    <span>&bull;</span> <em className="date">{years}</em>
                </p>
                <p>{description}</p>
            </div>
        )
    }

    function renderSkillsItem({ level: width, name }) {
        const backgroundColor = getRandomColor()
        const className = "bar-expand " + name.toLowerCase()
        return (
            <li key={skills.name}>
                <span
                    style={{ width, backgroundColor }}
                    {...{ className }}
                ></span>
                <em>{name}</em>
            </li>
        )
    }

    return (
        <section id="resume">
            <Slide left duration={1300}>
                <div className="row education">
                    <div className="three columns header-col">
                        <h1>
                            <span>Education</span>
                        </h1>
                    </div>
                    <div className="nine columns main-col">
                        <div className="row item">
                            <div className="twelve columns">
                                {education.map(renderEducationItem)}
                            </div>
                        </div>
                    </div>
                </div>
            </Slide>
            <Slide left duration={1300}>
                <div className="row work">
                    <div className="three columns header-col">
                        <h1>
                            <span>Work</span>
                        </h1>
                    </div>
                    <div className="nine columns main-col">
                        {work.map(renderWorkItem)}
                    </div>
                </div>
            </Slide>
            <Slide left duration={1300}>
                <div className="row skill">
                    <div className="three columns header-col">
                        <h1>
                            <span>Skills</span>
                        </h1>
                    </div>
                    <div className="nine columns main-col">
                        <div className="bars">
                            <ul className="skills">
                                {skills.map(renderSkillsItem)}
                            </ul>
                        </div>
                    </div>
                </div>
            </Slide>
        </section>
    )
}

function getRandomColor() {
    let letters = "0123456789ABCDEF",
        color = "#"
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color
}
