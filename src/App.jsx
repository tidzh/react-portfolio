import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as ROUTES from "./constants/routes";
import "./assets/styles/styles.scss";
import PortfolioPage from "./pages/PortfolioPage/PortfolioPage";
import Error404 from "./pages/Error404Page/Error404";
import FeedbackContainer from "./pages/FeedbackPage/FeedbackContainer";
import PortfolioSingleContainer from "./pages/PortfolioSinglePage/PortfolioSingleContainer";
import AdminContainer from "./pages/Dashboard/DashboardContainer";
import AuthContainer from "./components/Auth/AuthContainer";
import PageHome from "./pages/HomePage/HomePage";
import { initializeApp } from "./redux/actions/app";
import ServicesSingleContainer from "./pages/ServicesSinglePage/ServicesSingleContainer";
import { ProgressLine } from "./components/common/Progress/Progress";
import AboutMePage from "./pages/AboutMePage/AboutMePage";
import ServicesPage from "./pages/ServicesPage/ServicesPage";
import { getInitialize } from "./redux/selectors/app";

class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    const { initialize } = this.props;
    if (!initialize) return <ProgressLine />;
    return (
      <Router>
        <Switch>
          <Route exact path={ROUTES.HOME} component={PageHome} />
          <Route exact path={ROUTES.PORTFOLIO} component={PortfolioPage} />
          <Route exact path={ROUTES.PORTFOLIO_PAG} component={PortfolioPage} />
          <Route
            path={ROUTES.PORTFOLIO_SINGLE}
            component={PortfolioSingleContainer}
          />
          <Route path={ROUTES.FEEDBACK} component={FeedbackContainer} />
          <Route path={ROUTES.SERVICES} component={ServicesPage} />
          <Route
            path={ROUTES.SERVICES_SINGLE}
            component={ServicesSingleContainer}
          />
          <Route path={ROUTES.AUTH} component={AuthContainer} />
          <Route path={ROUTES.ADMIN} component={AdminContainer} />
          <Route path={ROUTES.ABOUTME} component={AboutMePage} />
          <Route path="*" component={Error404} />
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    initialize: getInitialize(state)
  };
};
export default connect(mapStateToProps, { initializeApp })(App);
