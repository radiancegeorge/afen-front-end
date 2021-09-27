import React from "react";
import "./App.css";
import { Header, Footer } from "./components";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {
  Home,
  Blogs,
  OurPartner,
  Team,
  WhitePaper,
  Services,
  Tokenomics,
} from "./pages";
import ScrollToTop from "./components/scrollTop";
import DashboardLogin from "./pages/DashboardLogin/DashboardLogin";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Header />
        <Switch>
          <Route exact path="/blogs" component={Blogs} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/teams" component={Team} />
          <Route exact path="/our-partner" component={OurPartner} />
          <Route exact path="/white-paper" component={WhitePaper} />
          <Route exact path="/tokenomics" component={Tokenomics} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/" component={Home} />
          <Route exact path="/dashboardLogin" component={DashboardLogin} />
          <Route path="/dashboard" exact component={Dashboard} />
        </Switch>
        <Footer />
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
