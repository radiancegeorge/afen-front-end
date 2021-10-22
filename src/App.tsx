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
import DashboardOptions from "./pages/dashboardSelect";
import EmailBoard from "./pages/emailBoard";
import ViewPost from "./pages/viewPost";
import BlogDelete from "./pages/BlogDelete";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Header />
        <Switch>
          <Route exact path="/blogs" component={Blogs} />
          <Route exact path="/blogdelete" component={BlogDelete} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/teams" component={Team} />
          <Route exact path="/partners" component={OurPartner} />
          <Route exact path="/white-paper" component={WhitePaper} />
          <Route exact path="/tokenomics" component={Tokenomics} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/" component={Home} />
          <Route exact path="/dashboardLogin" component={DashboardLogin} />
          <Route path="/dashboard" exact component={DashboardOptions} />
          <Route path="/newpost" exact component={Dashboard} />
          <Route path="/viewpost" exact component={ViewPost} />
          <Route path="/emailboard" exact component={EmailBoard} />
        </Switch>
        <Footer />
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
