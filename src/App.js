import React from 'react'
import background from './images/louvre.jpg';
import './stylers/styling.css'

const App = () => (
    <div className="background">
        <div className="backgroundImage">
        <div className="title">Brandon Barros</div>
            <div className="menu">
                <div className="menuChild">
                    <div className="sectionTitle">Work</div>
                    <div className="spacer"></div>
                    <a className="item" href="https://www.linkedin.com/in/brandon-barros-60a97a148/">Linkedin💼</a>
                    <div className="spacer"></div>
                    <a className="item" href="https://github.com/brandonlbarros">Github👨🏾‍💻</a>
                </div>
                <div className="menuChild">
                    <div className="sectionTitle">Writing</div>
                    <div className="spacer"></div>
                    <a className="item" href="https://twitter.com/home">Twitter🐦</a>
                    <div className="spacer"></div>
                    <a className="item" href="url">Medium</a>
                    <div className="spacer"></div>
                    <a className="item" href="https://a16z.com/author/brandon-barros/">a16z Articles🚀</a>
                </div>
                <div className="menuChild">
                    <div className="sectionTitle">Personal</div>
                    <div className="spacer"></div>
                    <a className="item" href="https://www.instagram.com/bbarros12/?hl=en">Instagram📸</a>
                </div>
            </div>
        </div>
    </div>
)

export default App