import React, { Component } from "react";
import moment from "moment";

import Context from "../../store";
import { fetchById } from "../../api";

import PageLoader from "../../components/PageLoader/PageLoader";

class Info extends Component {
    static contextType = Context;

    UNSAFE_componentWillMount() {
        let { setLastLocation } = this.context;
        let { pathname, search } = this.props.history.location;
        let lastLocation = `${pathname}${search}`;
        setLastLocation(lastLocation);

        let verification = this.queryVerification();
        if (!verification) return this.props.history.push("/");
        this.getSearchData();
    }

    queryVerification = () => {
        let { pathname, search } = this.props.history.location;
        if (pathname === "/info") {
            if (!search) return false;
            if (search.includes("id")) return true;
            return false;
        }
    };

    getSearchData = async () => {
        let { setInfo } = this.context;
        let { search } = this.props.history.location;
        search = search.split("?")[1];
        if (search.includes("&")) {
            search = search.split("&").map((e) => {
                return e.split("=")[1];
            });
            if (search[0] === "tv") search[0] = "series";
            let resp = await fetchById(search[0], search[1]);
            return setInfo(resp);
        }

        search = search.split("=")[1];
        let resp = await fetchById(null, search);
        return setInfo(resp);
    };

    handleWindowOpen() {
        let { info } = this.context;
        window.open(`${info.homepage}`);
    }

    componentWillUnmount() {
        let { setInfo } = this.context;
        setInfo(null);
    }
    render() {
        let { info } = this.context;
        let toRender = <PageLoader />;
        if (info) {
            let {
                poster_path,
                backdrop_path,
                overview,
                title,
                release_date,
                runtime,
                vote_average,
                vote_count,
            } = info;
            const url_poster_path = `https://image.tmdb.org/t/p/original${poster_path}`;
            const url_backdrop_path = `https://image.tmdb.org/t/p/original${backdrop_path}`;
            toRender = (
                <div className="text-left px-3" style={{ height: "87vh", overflowY: "scroll" }}>
                    <div className="row">
                        <div className="col-sm-12 col-lg-4 text-center">
                            <img
                                src={poster_path ? url_poster_path : url_backdrop_path}
                                width="75%"
                            />
                        </div>
                        <div className="col-sm-12 col-lg-8 pt-3">
                            <h3>{title}</h3>
                            <p className="lead">
                                Rated {vote_average} ★ by {vote_count} viewers
                            </p>
                            <p className="lead">Duration: {runtime} mins </p>
                            <p className="lead">
                                Released at: {moment(release_date).format("DD MMM YYYY")}
                            </p>
                            <h3>Synopsis</h3>
                            <p className="lead">{overview}</p>
                            {info.homepage && info.homepage.includes("netflix") ? (
                                <div className="d-flex">
                                    <p className="lead align-self-center m-0 py-1">
                                        Available at:{" "}
                                    </p>
                                    <img
                                        className="align-self-center my-auto"
                                        src="/netflixLogo.png"
                                        alt="Img"
                                        width={window.innerWidth > 480 ? "5%" : "20%"}
                                        style={{ cursor: "pointer" }}
                                        onClick={() => this.handleWindowOpen()}
                                    />
                                </div>
                            ) : (
                                ""
                            )}
                        </div>
                    </div>
                </div>
            );
        }

        return <div>{toRender}</div>;
    }
}

export default Info;
