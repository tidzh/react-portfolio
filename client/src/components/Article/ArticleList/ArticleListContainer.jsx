import {connect} from "react-redux";
import ArticleList from "./ArticleList";
import {setCurrentPageCreator, setPortfolioCreator} from "../../../redux/portfolio-reducer";


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

const ArticleListContainer = connect(mapStateToProps, mapStateToDispatch)(ArticleList);
export default ArticleListContainer;