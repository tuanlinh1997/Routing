import Home from "./pages/home/Home";
import About from "./pages/home/About";
import ListMovie from "./pages/home/ListMovie";


const routesHome = [
    {
        path: "/",
        exact: true,
        component: Home
    },
    {
        path: "/home",
        exact: false,
        component: Home
    },
    {
        path: "/about",
        exact: false,
        component: About
    },
    {
        path:"/list-movie",
        exact: false,
        component: ListMovie
    }
];

export default  routesHome ;