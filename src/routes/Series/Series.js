import React, { Component } from "react";

import Context from "../../store";
import PageLoader from "../../components/PageLoader/PageLoader";
import CardImageOverlay from "../../components/Card/CardImageOverlay";
import XScrollable from "../../components/ScrollableCards/XScrollable";

export default class Series extends Component {
    static contextType = Context;

    UNSAFE_componentWillMount() {
        let { location } = this.props;
        let { setLastLocation } = this.context;
        setLastLocation(location.pathname);
    }

    render() {
        let {
            trendingSeriesDay,
            trendingSeriesWeek,
            latestSeries,
            topRatedSeries,
            popularSeries,
        } = this.context;

        let latestSeriesComponent = <PageLoader />,
            trendingSeriesDayComponent = <PageLoader />,
            trendingSeriesWeekComponent = <PageLoader />,
            topRatedSeriesComponent = <PageLoader />,
            popularSeriesComponent = <PageLoader />;

        if (trendingSeriesDay && trendingSeriesDay.length > 0) {
            trendingSeriesDayComponent = <XScrollable type={"series"} data={trendingSeriesDay} />;
        }

        if (trendingSeriesWeek && trendingSeriesWeek.length > 0) {
            trendingSeriesWeekComponent = <XScrollable type={"series"} data={trendingSeriesWeek} />;
        }

        if (topRatedSeries && topRatedSeries.length > 0) {
            topRatedSeriesComponent = <XScrollable type={"series"} data={topRatedSeries} />;
        }

        if (popularSeries && popularSeries.length > 0) {
            popularSeriesComponent = <XScrollable type={"series"} data={popularSeries} />;
        }

        return (
            <div
                className="px-2 my-3"
                style={{ textAlign: "left", height: "87vh", overflowY: "scroll" }}
            >
                <div>
                    <h6 className="p-2">Trending Series Today</h6>
                    <div>{trendingSeriesDayComponent}</div>
                </div>
                <div>
                    <h6 className="p-2">Trending Series This Week</h6>
                    <div>{trendingSeriesWeekComponent}</div>
                </div>
                <div>
                    <h6 className="p-2">Top Rated Series</h6>
                    <div>{topRatedSeriesComponent}</div>
                </div>
                <div>
                    <h6 className="p-2">Popular Series</h6>
                    <div>{popularSeriesComponent}</div>
                </div>
            </div>
        );
    }
}
