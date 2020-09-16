import React, { useState } from "react";
import Sidebar from "./sidebar";
import Button from "../button";

import "./layout.scss";

function Layout(props) {
    const [showSidebar, setSidebarToggle] = useState(false);

    const toggleSidebar = () => {
        setSidebarToggle(!showSidebar);
    };

    return (
        <div className="layout container">
            <div className="row">
                {showSidebar && (
                    <Sidebar onHide={toggleSidebar} className="show">
                        <p className="lead">
                            <strong>Some more content...</strong>
                            <br />
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Consequuntur dolor minima necessitatibus! Iure
                            culpa, non soluta porro suscipit debitis aperiam
                            enim similique doloribus labore quam sunt amet ad
                            temporibus aliquid.
                        </p>
                    </Sidebar>
                )}
                <Content
                    isSidebarVisible={showSidebar}
                    onShowSidebar={toggleSidebar}
                >
                    <h1 className="display-1">Some content</h1>
                </Content>
            </div>
        </div>
    );
}

function Content({ children, isSidebarVisible, onShowSidebar }) {
    return (
        <div className="content jumbotron col">
            {children}
            {!isSidebarVisible && (
                <Button onAction={onShowSidebar} variant="primary">
                    Show
                </Button>
            )}
        </div>
    );
}

export default Layout;
