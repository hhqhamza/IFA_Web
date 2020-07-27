import React, { useState } from "react";
import TopBar from "./navigation";
import Toggle from "./Toggle";
import "./layout.css";

const Layout = ({ children }) => {
    const [topbarOpen, setTopbarOpen] = useState(false)
    const openHandler = () => {
        if (!topbarOpen) {
            setTopbarOpen(true)
        }
        else {
            setTopbarOpen(false)
        }
    }

    const topbarCloseHandler = () => {
        setTopbarOpen(false)
    }

    let topbar
    if (topbarOpen) {
        topbar = <TopBar close={topbarCloseHandler} topbar={"topbar"} />
    }


    return (
        <div>
            {topbar}
            <Toggle click={openHandler} />
            <p>{children}</p>
            <div id="websiteFrameTop" className="websiteFrame"></div>
            <div id="websiteFrameRight" className="websiteFrame"></div>
            <div id="websiteFrameBottom" className="websiteFrame"></div>
            <div id="websiteFrameLeft" className="websiteFrame"></div>
        </div>
    )
}

export default Layout
