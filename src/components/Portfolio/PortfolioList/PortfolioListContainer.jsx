import React, {Component} from "react";
import {connect} from "react-redux";
import PortfolioList from "./PortfolioList";
import Preloader from "../../common/Preloader/Preloader";
import {compose} from "redux";
import {getPortfolio, setLikePortfolio} from "../../../actions/portfolio";
import {
  getCurrentPage,
  getIsFetching, getLikeInProgress,
  getPageSize,
  getPortfolioList,
  getTotalPortfolio
} from "../../../selectors/portfolio";

class PortfolioListContainer extends Component {
  
  componentDidMount() {
	this.props.getPortfolio(this.props.currentPage, this.props.limit)
  }
  
  handlerPagination = pageNumber => {
	this.props.getPortfolio(pageNumber)
  };
  
  setPortfolioLike = (id, likes) => {
	this.props.setLikePortfolio(id, likes);
  };
  
  
  render() {
	const {limit} = this.props;
	return (
	  <PortfolioList portfolioList={this.props.portfolioList}
					 pageSize={this.props.pageSize}
					 setPortfolioLike={this.setPortfolioLike}
					 totalPortfolio={this.props.totalPortfolio}
					 currentPage={this.props.currentPage}
					 handlerPagination={this.handlerPagination}
					 isLike={this.props.likeInProgress}
					 limit={limit}
					 isFetching={this.props.isFetching ? <Preloader/> : null}
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
  connect(mapStateToProps, {setLikePortfolio, getPortfolio})
)(PortfolioListContainer)