import {connect} from "react-redux";
import {setCurrentPage, setPortfolio, setFetching} from "../../../redux/portfolio-reducer";
import React from "react";
import axios from "axios";
import PortfolioList from "./PortfolioList";
import Preloader from "../../common/Preloader/Preloader";

class PortfolioListContainer extends React.Component {
  
  componentDidMount() {
    this.props.setFetching(true)
    axios.get(`/api/portfolios?page=${this.props.currentPage}`).then(response => {
      this.props.setFetching(false)
      this.props.setPortfolio(response.data.items, response.data.totalCount);
    });
  }
  
  handlerPagination = (pageNumber) => {
    this.props.setFetching(true)
    this.props.setCurrentPage(pageNumber);
    axios.get(`/api/portfolios?page=${pageNumber}`).then(response => {
      this.props.setFetching(false)
      this.props.setPortfolio(response.data.items, response.data.totalCount)
    });
  }
  
  render() {
    return (
      <PortfolioList portfolioList={this.props.portfolioList}
      pageSize={this.props.pageSize}
      totalPortfolio={this.props.totalPortfolio}
      currentPage={this.props.currentPage}
      handlerPagination={this.handlerPagination}
      isFetching={this.props.isFetching ? <Preloader/> : null }
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


export default connect(mapStateToProps, {setPortfolio, setCurrentPage, setFetching})(PortfolioListContainer);