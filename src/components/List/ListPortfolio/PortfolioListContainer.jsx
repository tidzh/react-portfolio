import React, { Component } from "react";
import { connect } from "react-redux";
import PortfolioList from "./PortfolioList";
import { compose } from "redux";
import { getPortfolioRequest } from "../../../redux/actions/portfolio";
import {
  getCurrentPage,
  getIsFetching,
  getPageSize,
  getPortfolioList,
  getTotalPortfolio
} from "../../../redux/selectors/portfolio";
import { ProgressCircular } from "../../common/Progress/Progress";
import Pagination from "../../common/Pagination/Pagination";

class PortfolioListContainer extends Component {
  componentDidMount() {
    this.props.getPortfolioRequest(this.props.currentPage, this.props.limit);
  }

  handlerPagination = pageNumber => {
    this.props.getPortfolioRequest(pageNumber, this.props.limit);
  };

  render() {
    const {
      portfolioList,
      pageSize,
      totalPortfolio,
      currentPage,
      isFetching,
      pagination
    } = this.props;

    const setPagination = (
      <Pagination
        currentPage={currentPage}
        handlerPagination={this.handlerPagination}
        totalPortfolio={totalPortfolio}
        pageSize={pageSize}
      />
    );
    if (isFetching) return <ProgressCircular />;

    return (
      <PortfolioList
        portfolioList={portfolioList}
        setPagination={pagination ? setPagination : ""}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    portfolioList: getPortfolioList(state),
    pageSize: getPageSize(state),
    totalPortfolio: getTotalPortfolio(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state)
  };
};

export default compose(connect(mapStateToProps, { getPortfolioRequest }))(
  PortfolioListContainer
);
