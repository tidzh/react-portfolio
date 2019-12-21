import React from "react";
import {connect} from "react-redux";
import {getPortfolio, setLikePortfolio} from "../../../reducers/portfolio";
import PortfolioList from "./PortfolioList";
import Preloader from "../../common/Preloader/Preloader";
import {compose} from "redux";

class PortfolioListContainer extends React.Component {
  
  componentDidMount() {
	this.props.getPortfolio(this.props.currentPage, this.props.limit)
  }
  handlerPagination = (pageNumber) => {
	this.props.getPortfolio(pageNumber)
  }
  
  setPortfolioLike = (id, likes) => {
	this.props.setLikePortfolio(id,likes);
  }
  
  
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
	portfolioList: state.portfolioPage.portfolio,
	pageSize: state.portfolioPage.pageSize,
	totalPortfolio: state.portfolioPage.totalPortfolio,
	currentPage: state.portfolioPage.currentPage,
	isFetching: state.portfolioPage.isFetching,
	likeInProgress: state.portfolioPage.likeInProgress
  }
}

export default compose(
  connect(mapStateToProps, {setLikePortfolio, getPortfolio})
)(PortfolioListContainer)