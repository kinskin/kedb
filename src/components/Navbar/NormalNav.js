import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import DropdownInput from "../../components/Input/DropdownInput/DropdownInput";

const NormalNav = (props) => {
    let { navData, input, select, handleInput, handleSelect } = props;
    let { appDefault, appLinks } = navData;
    let [searchCollapse, setSearchCollapse] = useState(true);

    let toggleSearch = () => setSearchCollapse(!searchCollapse);

    let mappedAppLinks = appLinks.map((link, index) => (
        <div className="mx-3 align-self-center" key={index}>
            <Link to={link.path} style={{ textDecoration: "none" }}>
                <strong style={{ color: "white" }}>{link.name}</strong>
            </Link>
        </div>
    ));

    return (
        <div className="py-3 px-2 d-flex flex-row justify-content-between">
            <div className="align-self-center m-0 d-flex">
                <Link to={appDefault.path} style={{ textDecoration: "none" }}>
                    <h5 className="m-0 p-1 h3" style={{ color: "white" }}>
                        KEDB
                    </h5>
                </Link>
                {mappedAppLinks}
            </div>
            <div className="align-self-center m-0">
                <div className="d-flex align-self-center mx-3 my-auto">
                    {searchCollapse ? (
                        ""
                    ) : (
                        <DropdownInput
                            type={"search"}
                            input={input}
                            select={select}
                            selectData={appLinks}
                            handleSelect={handleSelect}
                            handleInput={handleInput}
                        />
                    )}
                    <SearchIcon
                        style={{
                            color: "white",
                            cursor: "pointer",
                            margin: "auto",
                            fontSize: "30px",
                        }}
                        onClick={toggleSearch}
                    />
                </div>
            </div>
        </div>
    );
};

export default NormalNav;
