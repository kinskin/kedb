import React, { Component } from "react";

import Context from "../../store";
import PageLoader from "../../components/PageLoader/PageLoader";
import CardImageOverlay from "../../components/Card/CardImageOverlay";
import XScrollable from "../../components/ScrollableCards/XScrollable";

export default class Home extends Component {
    static contextType = Context;

    UNSAFE_componentWillMount() {
        let { location } = this.props;
        let { setLastLocation } = this.context;
        setLastLocation(location.pathname);
    }

    render() {
        let {
            trendingMoviesDay,
            trendingMoviesWeek,
            trendingSeriesDay,
            trendingSeriesWeek,
        } = this.context;
        let trendingMoviesDayComponent = <PageLoader />,
            trendingMoviesWeekComponent = <PageLoader />,
            trendingSeriesDayComponent = <PageLoader />,
            trendingSeriesWeekComponent = <PageLoader />;

        if (trendingMoviesDay && trendingMoviesDay.length > 0) {
            trendingMoviesDayComponent = <XScrollable type={"movie"} data={trendingMoviesDay} />;
        }

        if (trendingMoviesWeek && trendingMoviesWeek.length > 0) {
            trendingMoviesWeekComponent = <XScrollable type={"movie"} data={trendingMoviesWeek} />;
        }

        if (trendingSeriesDay && trendingSeriesDay.length > 0) {
            trendingSeriesDayComponent = <XScrollable type={"series"} data={trendingSeriesDay} />;
        }

        if (trendingSeriesWeek && trendingSeriesWeek.length > 0) {
            trendingSeriesWeekComponent = <XScrollable type={"series"} data={trendingSeriesWeek} />;
        }

        return (
            <div className="px-2 my-3" style={{ textAlign: "left" }}>
                {/* <div>
                    <div>{latestMovieComponent}</div>
                </div> */}
                <div>
                    <h6 className="p-2">Trending Movies Today</h6>
                    <div>{trendingMoviesDayComponent}</div>
                </div>
                <div>
                    <h6 className="p-2">Trending Movies This Week</h6>
                    <div>{trendingMoviesWeekComponent}</div>
                </div>
                <div>
                    <h6 className="p-2">Trending TV Series Today</h6>
                    <div>{trendingSeriesDayComponent}</div>
                </div>
                <div>
                    <h6 className="p-2">Trending TV Series This Week</h6>
                    <div>{trendingSeriesWeekComponent}</div>
                </div>
            </div>
        );
    }
}
