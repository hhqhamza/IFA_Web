import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Container } from "react-bootstrap";
import "./navigation.css"

const TopBar = (props) => {
    const [topbarClass, setTopbarClass] = useState(props.topbar)

    const closeHandler = (e) => {
        e.preventDefault()
        setTopbarClass("topbar close")
        setTimeout(() => {
            props.close()
        }, 1000)
    }

    const componentWillMount = () => {
        setTopbarClass("topbar close")
    }

    return (
        <Container>
            <div className={topbarClass}>
                <nav className="header-wrapper">
                    <NavLink to="/Home" onClick={componentWillMount}>Home</NavLink>
                    <NavLink to="/News" onClick={componentWillMount}>News</NavLink>
                    <NavLink to="/Chatroom" onClick={componentWillMount}>Chatroom</NavLink>
                    <NavLink to="/Fachgebiete" onClick={componentWillMount}>Fachgebiete</NavLink>
                    <NavLink to="/Studiengang" onClick={componentWillMount}>Studiengang</NavLink>
                    <NavLink to="/Initiativen" onClick={componentWillMount}>Initiativen</NavLink>
                    <NavLink to="/Einrichtungen" onClick={componentWillMount}>Einrichtungen</NavLink>
                    <NavLink to="/Kontakt" onClick={componentWillMount}>Kontakt</NavLink>
                    <NavLink to="/Ifa_Home" onClick={componentWillMount}>IfA Home</NavLink>
                    <NavLink to="/Tu_Home" onClick={componentWillMount}>TU Home</NavLink>
                </nav>
                <div className="btn_pos_rt">
                    <button className="btn_rt" id="close" onClick={closeHandler}>&times;</button>
                </div>
                {/* <div className="btn_pos_lt">
                    <button className="btn_lt" id="close" onClick={closeHandler}>&times;</button>
                </div> */}
            </div>
        </Container>
    )
}

export default TopBar