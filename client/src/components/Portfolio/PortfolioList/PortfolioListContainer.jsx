import {connect} from "react-redux";
import {setCurrentPage, setPortfolio, setFetching, setPortfolioLike} from "../../../redux/portfolio-reducer";
import React from "react";
import PortfolioList from "./PortfolioList";
import Preloader from "../../common/Preloader/Preloader";
import {portfolioAPI} from "../../../api/api";

class PortfolioListContainer extends React.Component {
  
  componentDidMount() {
	this.props.setFetching(true)
	portfolioAPI.getPortfolio(this.props.currentPage).then(data => {
	  this.props.setFetching(false)
	  this.props.setPortfolio(data.items, data.totalCount);
	});
  }
  
  handlerPagination = (pageNumber) => {
	this.props.setFetching(true)
	this.props.setCurrentPage(pageNumber);
	portfolioAPI.handlerPagination(pageNumber).then(data => {
	  this.props.setFetching(false)
	  this.props.setPortfolio(data.items, data.totalCount)
	});
  }
  setPortfolioLike = (id, likes) => {
	portfolioAPI.setPortfolioLike(id,likes).then(() => {
	  this.props.setPortfolioLike(id);
	});
  }
  
  render() {
	return (
	  <PortfolioList portfolioList={this.props.portfolioList}
					 pageSize={this.props.pageSize}
					 setPortfolioLike={this.setPortfolioLike}
					 totalPortfolio={this.props.totalPortfolio}
					 currentPage={this.props.currentPage}
					 handlerPagination={this.handlerPagination}
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
  }
}


export default connect(mapStateToProps, {
  setPortfolio,
  setCurrentPage,
  setFetching,
  setPortfolioLike
})(PortfolioListContainer);