import {connect} from "react-redux";
import {setCurrentPageCreator, setPortfolioCreator} from "../../../redux/portfolio-reducer";
import React from "react";
import axios from "axios";
import PortfolioList from "./PortfolioList";

class PortfolioListContainer extends React.Component {
  
  componentDidMount() {
    axios.get(`/api/portfolio?page=${this.props.currentPage}`).then(response => {
      this.props.setPortfolio(response.data.items, response.data.totalCount);
    });
  }
  
  handlerPagination = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios.get(`/api/portfolio?page=${pageNumber}`).then(response => {
      this.props.setPortfolio(response.data.items, response.data.totalCount)
    });
  }
  
  render() {
    return (<PortfolioList
      portfolioList={this.props.portfolioList}
      pageSize={this.props.pageSize}
      totalPortfolio={this.props.totalPortfolio}
      currentPage={this.props.currentPage}
      handlerPagination={this.handlerPagination}
    />)
  }
}

const mapStateToProps = state => {
  return {
   portfolioList: state.portfolioPage.portfolio,
   pageSize: state.portfolioPage.pageSize,
   totalPortfolio: state.portfolioPage.totalPortfolio,
   currentPage: state.portfolioPage.currentPage,
  }
}
const mapStateToDispatch = dispatch => {
  return {
    setPortfolio: (portfolio, totalCount) => {
      dispatch(setPortfolioCreator(portfolio, totalCount))
    },
    setCurrentPage: (currentPage) => {
      dispatch(setCurrentPageCreator(currentPage))
    }
  }
}

export default connect(mapStateToProps, mapStateToDispatch)(PortfolioListContainer);