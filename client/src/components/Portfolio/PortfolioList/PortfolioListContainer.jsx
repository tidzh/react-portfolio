import React from "react";
import {connect} from "react-redux";
import {getPortfolio, setLikePortfolio} from "../../../redux/portfolio-reducer";
import PortfolioList from "./PortfolioList";
import Preloader from "../../common/Preloader/Preloader";

class PortfolioListContainer extends React.Component {
  
  componentDidMount() {
	this.props.getPortfolio(this.props.currentPage)
  }
  handlerPagination = (pageNumber) => {
	this.props.getPortfolio(pageNumber)
  }
  
  setPortfolioLike = (id, likes) => {
	this.props.setLikePortfolio(id,likes);
  }
  
  render() {
	return (
	  <PortfolioList portfolioList={this.props.portfolioList}
					 pageSize={this.props.pageSize}
					 setPortfolioLike={this.setPortfolioLike}
					 totalPortfolio={this.props.totalPortfolio}
					 currentPage={this.props.currentPage}
					 handlerPagination={this.handlerPagination}
					 isLike={this.props.likeInProgress}
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


export default connect(mapStateToProps, {
  setLikePortfolio, getPortfolio
})(PortfolioListContainer);