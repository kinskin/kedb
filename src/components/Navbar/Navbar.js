import React, { Component } from "react";
import NormalNav from "./NormalNav";
import MobileNav from "./MobileNav";
import routes from "../../routes";
import Context from "../../store";

export default class Navbar extends Component {
    static contextType = Context;

    inputData(select, input) {
        let { lastLocation } = this.context;
        if (!input) return this.props.history.push(lastLocation ? lastLocation : "/");
        this.props.history.push(`/search?type=${select}&title=${input}`);
    }

    handleSelect(searchSelect) {
        let { searchInput, setSearchSelect } = this.context;
        setSearchSelect(searchSelect);
        if (searchInput) this.inputData(searchSelect, searchInput);
    }

    handleInput(searchInput) {
        let { searchSelect, setSearchInput } = this.context;
        setSearchInput(searchInput);
        if (searchSelect) this.inputData(searchSelect, searchInput);
    }

    handleCollapse(collapse) {
        let { setCollapse } = this.context;
        setCollapse(collapse);
    }

    render() {
        let navData = { appDefault: routes[0] };
        let { searchSelect, searchInput } = this.context;
        let trueRoutes = routes.filter(
            (route) => route.name === "Movies" || route.name === "Series"
        );
        navData.appLinks = trueRoutes;

        let nav =
            window.innerWidth > 480 ? (
                <NormalNav
                    navData={navData}
                    inputData={(select, input) => this.inputData(select, input)}
                    input={searchInput}
                    select={searchSelect}
                    handleInput={(e) => {
                        this.handleInput(e.target.value);
                    }}
                    handleSelect={(e) => {
                        this.handleSelect(e.target.value);
                    }}
                />
            ) : (
                <MobileNav
                    navData={navData}
                    inputData={(select, input) => this.inputData(select, input)}
                    input={searchInput}
                    select={searchSelect}
                    handleInput={(e) => {
                        this.handleInput(e.target.value);
                    }}
                    handleSelect={(e) => {
                        this.handleSelect(e.target.value);
                    }}
                    handleCollapse={(collapse) => this.handleCollapse(collapse)}
                />
            );

        return nav;
    }
}
