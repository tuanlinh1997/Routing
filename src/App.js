import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import Home from "./pages/home/Home";
// import About from "./pages/home/About";
// import ListMovie from "./pages/home/ListMovie";
import Navbar from "./components/Navbar";
import PageNotFound from "./pages/PageNotFound";
import routesHome from "./routes";

function App() {
  const showMenuHome = routes => {
    if (routes && routes.length > 0) {
      return routes.map((item, index) => {
        return (
          <Route
            key={index}
            exact={item.exact}
            path={item.path}
            component={item.component}
          />
        );
      });
    }
  };

  return (
    <BrowserRouter>
      <div>
        <Navbar />

        <Switch>

          {showMenuHome(routesHome)}

          {/* Trang Chủ - localhost:3000 */}
          {/* <Route exact path="/" component={Home} /> */}

          {/* <Route path="/home" component={Home} /> */}

          {/* Trang about - localhost:3000/about */}
          {/* <Route path="/about" component={About} /> */}

          {/* Trang ListMovie - localhost:3000/list-movie */}
          {/* <Route path="/list-movie" component={ListMovie} /> */}

          {/* Trang không có -  để cuối cùng */}
          <Route path="" component={PageNotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
