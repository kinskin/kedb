import React, { Component } from "react";

import Context from "../../store";
import PageLoader from "../../components/PageLoader/PageLoader";
import CardImageOverlay from "../../components/Card/CardImageOverlay";
import XScrollable from "../../components/ScrollableCards/XScrollable";

export default class Movies extends Component {
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
            upcomingMovies,
            topRatedMovies,
            popularMovies,
        } = this.context;
        let latestMovieComponent = <PageLoader />,
            upcomingMoviesComponent = <PageLoader />,
            topRatedMoviesComponent = <PageLoader />,
            popularMoviesComponent = <PageLoader />,
            trendingMoviesDayComponent = <PageLoader />,
            trendingMoviesWeekComponent = <PageLoader />;

        if (trendingMoviesDay && trendingMoviesDay.length > 0) {
            trendingMoviesDayComponent = <XScrollable type={"movie"} data={trendingMoviesDay} />;
        }

        if (trendingMoviesWeek && trendingMoviesWeek.length > 0) {
            trendingMoviesWeekComponent = <XScrollable type={"movie"} data={trendingMoviesWeek} />;
        }

        if (upcomingMovies && upcomingMovies.length > 0) {
            upcomingMoviesComponent = <XScrollable type={"movie"} data={upcomingMovies} />;
        }

        if (topRatedMovies && topRatedMovies.length > 0) {
            topRatedMoviesComponent = <XScrollable type={"movie"} data={topRatedMovies} />;
        }

        if (popularMovies && popularMovies.length > 0) {
            popularMoviesComponent = <XScrollable type={"movie"} data={popularMovies} />;
        }

        return (
            <div
                className="px-2 my-3"
                style={{ textAlign: "left", height: "87vh", overflowY: "scroll" }}
            >
                <div>
                    <h6 className="p-2">Trending Movies Today</h6>
                    <div>{trendingMoviesDayComponent}</div>
                </div>
                <div>
                    <h6 className="p-2">Trending Movies This Week</h6>
                    <div>{trendingMoviesWeekComponent}</div>
                </div>
                <div>
                    <h6 className="p-2">Upcoming Movies</h6>
                    <div>{upcomingMoviesComponent}</div>
                </div>
                <div>
                    <h6 className="p-2">Top Rated Movies</h6>
                    {topRatedMoviesComponent}
                </div>
                <div>
                    <h6 className="p-2">Popular Movies</h6>
                    {popularMoviesComponent}
                </div>
            </div>
        );
    }
}
