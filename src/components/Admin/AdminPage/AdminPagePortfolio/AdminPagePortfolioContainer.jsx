import AdminPagePortfolio from "./AdminPagePortfolio";
import {updatePortfolioCreator, newPortfolioCreator} from "../../../../redux/portfolio-reducer";
import {connect} from "react-redux";

const mapStateToProps = state => {
  return {
	portfolioData: state.portfolioPage.portfolio,
	portfolioDataNew: state.portfolioPage.newPortfolio,
  }
};
const mapDispatchToProps = dispatch => {
  return {
	updatePortfolio: (name, value) => {
	  dispatch(updatePortfolioCreator(name, value));
	},
	addPortfolio: () => {
	  dispatch(newPortfolioCreator());
	}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(AdminPagePortfolio);