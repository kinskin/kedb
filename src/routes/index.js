import Home from "./Home/Home";
import Movies from "./Movies/Movies";
import Series from "./Series/Series";
import Search from "./Search/Search";
import Info from "./Info/Info";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/movies",
        name: "Movies",
        component: Movies,
        value: "movie",
    },
    {
        path: "/series",
        name: "Series",
        component: Series,
        value: "series",
    },
    {
        path: "/search",
        name: "Search",
        component: Search,
    },
    {
        path: "/info",
        name: "Info",
        component: Info,
    },
];

export default routes;
