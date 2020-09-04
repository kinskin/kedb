import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Collapse, Navbar, Nav, NavItem } from "reactstrap";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import DropdownInput from "../../components/Input/DropdownInput/DropdownInput";

const MobileNav = (props) => {
    let { navData, input, select, handleInput, handleSelect, handleCollapse } = props;
    let { appDefault, appLinks } = navData;
    const [menuCollapsed, setMenuCollapsed] = useState(true);
    const [searchCollapsed, setSearchCollapsed] = useState(true);

    useEffect(() => {
        const _collapse = () => {
            if (searchCollapsed && menuCollapsed) {
                handleCollapse(true);
            }

            if (!searchCollapsed || !menuCollapsed) {
                handleCollapse(false);
            }
        };
        _collapse();
    }, [searchCollapsed, menuCollapsed]);

    const toggleMenu = () => {
        if (!searchCollapsed) setSearchCollapsed(!searchCollapsed);
        setMenuCollapsed(!menuCollapsed);
    };
    const toggleSearch = () => {
        if (!menuCollapsed) setMenuCollapsed(!menuCollapsed);
        setSearchCollapsed(!searchCollapsed);
    };

    let mappedAppLinks = appLinks.map((link, index) => (
        <div className="my-2" key={index}>
            <Link to={link.path} onClick={toggleMenu} style={{ textDecoration: "none" }}>
                <strong style={{ color: "white" }}>{link.name}</strong>
            </Link>
        </div>
    ));

    return (
        <div className="py-2">
            <Navbar color="faded" dark>
                <div className="align-self-center mr-1">
                    <Link to={appDefault.path} style={{ textDecoration: "none" }}>
                        <h4 className="m-0" style={{ color: "white" }}>
                            KEDB
                        </h4>
                    </Link>
                </div>
                <div>
                    <SearchIcon
                        className="mr-2"
                        style={{ color: "white", cursor: "pointer", fontSize: "30px" }}
                        onClick={toggleSearch}
                    />

                    <MenuIcon
                        style={{ color: "white", cursor: "pointer", fontSize: "30px" }}
                        onClick={toggleMenu}
                    />
                </div>
            </Navbar>
            <div>
                <Collapse isOpen={!searchCollapsed} navbar>
                    <Nav navbar>
                        <div className="align-self-center m-0 p-2">
                            <DropdownInput
                                type={"search"}
                                input={input}
                                select={select}
                                selectData={appLinks}
                                handleSelect={handleSelect}
                                handleInput={handleInput}
                            />
                        </div>
                    </Nav>
                </Collapse>
                <Collapse isOpen={!menuCollapsed} navbar>
                    <Nav navbar>
                        <div className="align-self-center mx-3" style={{ marginLeft: "auto" }}>
                            <NavItem>{mappedAppLinks}</NavItem>
                        </div>
                    </Nav>
                </Collapse>
            </div>
        </div>
    );
};

export default MobileNav;
