import React from "react";
import PropTypes from "prop-types";

const Header = ({
    name,
    href,
    navItems,
    activeTab,
    onTabChange,
    light,
    dark,
    children
}) => {
    let classStr = "navbar navbar-expand-lg";
    if (light) classStr += " navbar-light";
    else if (dark) classStr += " navbar-dark";
    else classStr += "";
    return (
        <nav className={classStr + " py-0"}>
            {name && <NavbarBrand name={name} href={href} />}
            <NavbarToggler />
            <Nav
                activeTab={activeTab}
                onTabChange={onTabChange}
                items={navItems}
            >
                {children}
            </Nav>
        </nav>
    );
};

export const NavbarBrand = ({ name, href }) => {
    return (
        <a href={href} className="navbar-brand">
            {name}
        </a>
    );
};

export const NavbarToggler = () => {
    return (
        <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span className="navbar-toggler-icon"></span>
        </button>
    );
};

export function Nav({ items, activeTab, onTabChange, children }) {
    let navItems = items.map((item) => {
        item.active = activeTab === item.name;
        item.onTabChange = () => onTabChange(item.name);
        return <NavItem item={item} key={item.id} />;
    });

    return (
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">{navItems}</ul>
            {children}
        </div>
    );
}

Nav.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object),
    activeTab: PropTypes.string.isRequired,
    onTabChange: PropTypes.func.isRequired,
};

export function NavItem({ item }) {
    const { name, href, active, additionalInfo } = item;
    let additionalElem = [];

    if (additionalInfo) {
        additionalElem = Object.keys(additionalInfo).map((key) => (
            <span className={key}>{additionalInfo[key]}</span>
        ));
    }

    return (
        <li className="nav-item">
            <a
                className={`nav-link ${active ? "active" : ""}`}
                onClick={item.onTabChange}
                href={href}
            >
                {additionalInfo && additionalElem}
                {name}
            </a>
        </li>
    );
}

NavItem.propTypes = {
    item: PropTypes.shape({
        name: PropTypes.string.isRequired,
        href: PropTypes.string,
        active: PropTypes.bool.isRequired,
        onTabChange: PropTypes.func.isRequired,
        additionalInfo: PropTypes.object,
    }),
};

export default Header;
