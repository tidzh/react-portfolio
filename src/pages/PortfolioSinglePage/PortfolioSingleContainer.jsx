import React from "react";
import PortfolioSinglePage from "./PortfolioSinglePage";
import { connect } from "react-redux";
import Breadcrumbs from "../../components/common/Breadcrumbs/Breadcrumbs";
import { getPortfolioSingleRequest } from "../../redux/actions/portfolio";
import Page from "../_layout/Page/Page";
import { getPortfolioSingle } from "../../redux/selectors/portfolio";
import { PORTFOLIO } from "../../constants/routes";

class PortfolioSingleContainer extends React.Component {
  componentDidMount() {
    const url = this.props.match.params.url;
    this.props.getPortfolioSingleRequest(url);
  }

  render() {
    if (!this.props.portfolioSingle) return false;
    const breadcrumbsConstructor = [
      {
        name: "Портфолио",
        url: `${PORTFOLIO}`
      },
      {
        name: `${this.props.portfolioSingle.title}`,
        url: `${this.props.match.url}`
      }
    ];

    return (
      <Page
        pageMeta={{
          title: `${this.props.portfolioSingle.title}`,
          description: "Бла бла бла"
        }}
      >
        <PortfolioSinglePage
          portfolioSingle={this.props.portfolioSingle}
          breadcrumbs={<Breadcrumbs data={breadcrumbsConstructor} />}
        />
      </Page>
    );
  }
}

const mapStateToProps = state => {
  return {
    portfolioSingle: getPortfolioSingle(state)
  };
};

export default connect(mapStateToProps, { getPortfolioSingleRequest })(
  PortfolioSingleContainer
);
