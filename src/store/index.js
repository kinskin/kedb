import React, { Component, createContext } from "react";

const Context = createContext();

export class ContextProvider extends Component {
    state = {
        lastLocation: null,
        trendingMoviesDay: null,
        trendingMoviesWeek: null,
        latestMovie: null,
        upcomingMovies: null,
        popularMovies: null,
        topRatedMovies: null,
        trendingSeriesDay: null,
        trendingSeriesWeek: null,
        latestSeries: null,
        topRatedSeries: null,
        popularSeries: null,
        searchInput: null,
        searchSelect: null,
        searchPage: null,
        search: null,
        info: null,
        collapse: true,
    };

    setLastLocation = (lastLocation) => {
        this.setState((prevState) => ({ lastLocation }));
    };

    setTrendingMovies = (movie, type) => {
        if (type === "day") {
            this.setState((prevState) => ({ trendingMoviesDay: movie }));
        }
        if (type === "week") {
            this.setState((prevState) => ({ trendingMoviesWeek: movie }));
        }
    };

    setTrendingSeries = (series, type) => {
        if (type === "day") {
            this.setState((prevState) => ({ trendingSeriesDay: series }));
        }
        if (type === "week") {
            this.setState((prevState) => ({ trendingSeriesWeek: series }));
        }
    };

    setLatestSeries = (latestSeries) => {
        this.setState((prevState) => ({ latestSeries }));
    };

    setTopRatedSeries = (topRatedSeries) => {
        this.setState((prevState) => ({ topRatedSeries }));
    };

    setPopularSeries = (popularSeries) => {
        this.setState((prevState) => ({ popularSeries }));
    };

    setLatestMovie = (latestMovie) => {
        this.setState((prevState) => ({ latestMovie }));
    };

    setUpcomingMovies = (upcomingMovies) => {
        this.setState((prevState) => ({ upcomingMovies }));
    };

    setPopularMovies = (popularMovies) => {
        this.setState((prevState) => ({ popularMovies }));
    };

    setTopRatedMovies = (topRatedMovies) => {
        this.setState((prevState) => ({ topRatedMovies }));
    };

    setSearchInput = (searchInput) => {
        this.setState((prevState) => ({ searchInput }));
    };

    setSearchSelect = (searchSelect) => {
        this.setState((prevState) => ({ searchSelect }));
    };

    setSearchPage = (searchPage) => {
        this.setState((prevState) => ({ searchPage }));
    };

    setSearch = (search) => {
        this.setState((prevState) => ({ search }));
    };

    setInfo = (info) => {
        this.setState((prevState) => ({ info }));
    };

    setCollapse = (collapse) => {
        this.setState((prevState) => ({ collapse }));
    };

    render() {
        const { children } = this.props;
        const {
            lastLocation,
            upcomingMovies,
            popularMovies,
            topRatedMovies,
            latestMovie,
            trendingMoviesDay,
            trendingMoviesWeek,
            trendingSeriesDay,
            trendingSeriesWeek,
            latestSeries,
            topRatedSeries,
            popularSeries,
            searchInput,
            searchSelect,
            searchPage,
            search,
            info,
            collapse,
        } = this.state;
        const {
            setLastLocation,
            setUpcomingMovies,
            setPopularMovies,
            setTopRatedMovies,
            setLatestMovie,
            setTrendingMovies,
            setTrendingSeries,
            setLatestSeries,
            setTopRatedSeries,
            setPopularSeries,
            setSearchInput,
            setSearchSelect,
            setSearchPage,
            setSearch,
            setInfo,
            setCollapse,
        } = this;
        let value = {
            lastLocation,
            setLastLocation,
            trendingMoviesDay,
            trendingMoviesWeek,
            setTrendingMovies,
            latestMovie,
            setLatestMovie,
            upcomingMovies,
            setUpcomingMovies,
            popularMovies,
            setPopularMovies,
            topRatedMovies,
            setTopRatedMovies,
            trendingSeriesDay,
            trendingSeriesWeek,
            setTrendingSeries,
            latestSeries,
            topRatedSeries,
            popularSeries,
            setLatestSeries,
            setPopularSeries,
            setTopRatedSeries,
            searchInput,
            searchSelect,
            searchPage,
            search,
            setSearchInput,
            setSearchSelect,
            setSearchPage,
            setSearch,
            info,
            setInfo,
            collapse,
            setCollapse,
        };
        return <Context.Provider value={value}>{children}</Context.Provider>;
    }
}

export default Context;
