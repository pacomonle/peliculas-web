import React from "react";
import { Layout } from "antd";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MenuTop from "./components/MenuTop";
// Pages
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Popular from "./pages/Popular";
import Search from "./pages/Search";
import NewMovies from "./pages/NewMovies";
import Error404 from "./pages/Error404";

function App() {
  const { Header, Content } = Layout;

  return (
    <div className="App">
      <Layout>
        <Router>
          <Header>
            <MenuTop></MenuTop>
          </Header>
          <Content>
            <Switch>
              <Route path="/" exact>
                <Home></Home>
              </Route>
              <Route path="/newMovies" exact>
                <NewMovies></NewMovies>
              </Route>
              <Route path="/popular" exact>
                <Popular></Popular>
              </Route>
              <Route path="/search" exact>
                <Search></Search>
              </Route>

              <Route path="/movie/:id" exact>
                <Movie></Movie>
              </Route>

              <Route path="*" exact>
                <Error404></Error404>
              </Route>
            </Switch>
          </Content>
        </Router>
      </Layout>
    </div>
  );
}

export default App;
