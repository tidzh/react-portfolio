import React, {Component} from "react";
import {connect} from "react-redux";
import PortfolioList from "./PortfolioList";
import {compose} from "redux";
import {getPortfolioRequest, setLikePortfolio} from "../../../redux/actions/portfolio";
import {
  getCurrentPage,
  getIsFetching, getLikeInProgress,
  getPageSize,
  getPortfolioList,
  getTotalPortfolio
} from "../../../redux/selectors/portfolio";
import {ProgressCircular} from "../../common/Progress/Progress";

class PortfolioListContainer extends Component {
  
  componentDidMount() {
	this.props.getPortfolioRequest(this.props.currentPage, this.props.limit)
  }
  
  handlerPagination = pageNumber => {
	this.props.getPortfolioRequest(pageNumber)
  };
  
  render() {
	const {limit, portfolioList, pageSize, totalPortfolio, currentPage, isFetching} = this.props;
	return (
	  <PortfolioList portfolioList={portfolioList}
					 pageSize={pageSize}
					 totalPortfolio={totalPortfolio}
					 currentPage={currentPage}
					 handlerPagination={this.handlerPagination}
					 limit={limit}
					 isFetching={isFetching ? <ProgressCircular/> : null}
	  />
	)
  }
}

const mapStateToProps = state => {
  return {
	portfolioList: getPortfolioList(state),
	pageSize: getPageSize(state),
	totalPortfolio: getTotalPortfolio(state),
	currentPage: getCurrentPage(state),
	isFetching: getIsFetching(state),
	likeInProgress: getLikeInProgress(state)
  }
}

export default compose(
  connect(mapStateToProps, {setLikePortfolio, getPortfolioRequest})
)(PortfolioListContainer)