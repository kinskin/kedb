import React, { Component } from "react";

import { fetchSearch } from "../../api";
import Context from "../../store";

import YScrollable from "../../components/ScrollableCards/YScrollable";
import PageLoader from "../../components/PageLoader/PageLoader";

class Search extends Component {
    static contextType = Context;

    constructor() {
        super();
        this.state = {
            location: null,
        };
    }

    UNSAFE_componentWillMount() {
        let verification = this.queryVerification();
        if (!verification) return this.props.history.push("/");
        this.setState({ location: this.props.history.location }, () => {
            this.fetchSearchData();
        });
    }

    componentDidUpdate(prevProps) {
        let verification = this.queryVerification();
        if (!verification) return this.props.history.push("/");
        if (this.state.location !== prevProps.history.location) {
            this.setState({ location: prevProps.history.location }, () => {
                this.fetchSearchData();
            });
        }
    }

    queryVerification = () => {
        let { pathname, search } = this.props.history.location;
        if (pathname === "/search") {
            if (!search) return false;
            search = search.split("?")[1].split("&");
            let searchHeading = search.map((e) => e.split("=")[0]);
            if (!searchHeading.includes("type") || !searchHeading.includes("title")) return false;

            return true;
        }
    };

    async fetchSearchData(nextPage) {
        let {
            searchPage,
            setSearch,
            setSearchInput,
            setSearchSelect,
            setSearchPage,
        } = this.context;
        let { search } = this.props.history.location;
        search = search
            .split("?")[1]
            .split("&")
            .map((e) => {
                return e.split("=")[1];
            });

        searchPage = nextPage ? searchPage + 1 : 1;
        setSearchPage(searchPage);
        setSearchSelect(search[0]);
        setSearchInput(search[1]);
        let resp = await fetchSearch(search[0], search[1], searchPage);
        nextPage ? setSearch([...this.context.search, ...resp.results]) : setSearch(resp.results);
    }

    render() {
        let { search, searchInput, searchSelect } = this.context;
        let toRender = search ? <YScrollable type={searchSelect} data={search} /> : <PageLoader />;

        return (
            <div
                className="px-2 my-3"
                style={{
                    textAlign: "left",
                    maxHeight: "87vh",
                    overflowY: "scroll",
                }}
            >
                <div>
                    <h5 className="m-0 px-1">Search: {searchInput}</h5>
                </div>
                {toRender}
                <div className="d-flex justify-content-center">
                    <button
                        className="btn btn-md btn-outline-light"
                        onClick={() => {
                            this.fetchSearchData(true);
                        }}
                    >
                        Load More
                    </button>
                </div>
            </div>
        );
    }
}

export default Search;
