import AdminPagePortfolio from "./AdminPagePortfolio";
import {connect} from "react-redux";
import {addPortfolio, updatePortfolioCreator} from "../../../redux/actions/portfolio";

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
	  dispatch(addPortfolio());
	}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(AdminPagePortfolio);