import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import routes from "./routes";
import { fetchMovies, fetchTrending, fetchSeries } from "./api";
import Context from "./store";

const history = createBrowserHistory();

class App extends Component {
    static contextType = Context;
    async UNSAFE_componentWillMount() {
        await this.fetchTheseTrending("movie", "day");
        await this.fetchTheseTrending("series", "day");
        await this.fetchTheseTrending("movie", "week");
        await this.fetchTheseTrending("series", "week");
    }

    async componentDidMount() {
        this.fetchTheseMovies("latest");
        this.fetchTheseMovies("upcoming");
        this.fetchTheseMovies("topRated");
        this.fetchTheseMovies("popular");
        this.fetchTheseSeries("latest");
        this.fetchTheseSeries("topRated");
        this.fetchTheseSeries("popular");
    }

    fetchTheseSeries = async (type) => {
        const { setLatestSeries, setPopularSeries, setTopRatedSeries } = this.context;
        let data = await fetchSeries(type);
        switch (type) {
            case "latest":
                await setLatestSeries(data);
                break;
            case "topRated":
                await setTopRatedSeries(data.results);
                break;
            case "popular":
                await setPopularSeries(data.results);
                break;
            default:
                return;
        }
    };

    fetchTheseTrending = async (type, subType) => {
        let { setTrendingMovies, setTrendingSeries } = this.context;
        let data = await fetchTrending(type, subType);
        switch (type) {
            case "movie":
                setTrendingMovies(data.results, subType);
                break;
            case "series":
                setTrendingSeries(data.results, subType);
                break;
            default:
                return;
        }
    };

    fetchTheseMovies = async (type) => {
        const {
            setUpcomingMovies,
            setPopularMovies,
            setTopRatedMovies,
            setLatestMovie,
        } = this.context;
        let data = await fetchMovies(type);

        switch (type) {
            case "latest":
                await setLatestMovie(data);
                break;
            case "upcoming":
                await setUpcomingMovies(data.results);
                break;
            case "topRated":
                await setTopRatedMovies(data.results);
                break;
            case "popular":
                await setPopularMovies(data.results);
                break;
            default:
                return;
        }
    };

    render() {
        let { collapse } = this.context;
        let baseRoutes = routes.map((route, index) => {
            return route.path === "/" ? (
                <Route path={route.path} exact component={route.component} key={index} />
            ) : (
                <Route path={route.path} component={route.component} key={index} />
            );
        });
        return (
            <Router history={history}>
                <div className="App">
                    <Navbar history={history} />
                    <div
                        className="container-fluid"
                        style={{
                            height: window.innerWidth > 480 ? "87vh" : collapse ? "87vh" : "80vh",
                            overflowY: "scroll",
                        }}
                    >
                        <Switch>{baseRoutes}</Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
