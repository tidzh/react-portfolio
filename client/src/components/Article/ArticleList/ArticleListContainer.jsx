import {connect} from "react-redux";
import ArticleList from "./ArticleList";
import {setPortfolioCreator} from "../../../redux/portfolio-reducer";


const mapStateToProps = state => {
  return {
   portfolioList: state.portfolioPage.portfolio
  }
}
const mapStateToDispatch = dispatch => {
  return {
    setPortfolio: (portfolio) => {
      dispatch(setPortfolioCreator(portfolio))
    }
  }
}

const ArticleListContainer = connect(mapStateToProps, mapStateToDispatch)(ArticleList);
export default ArticleListContainer;