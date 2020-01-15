import React, {Component} from "react";
import PagePortfolio from "./PagePortfolio";
import {connect} from "react-redux";
import {getPortfolioList} from "../../../redux/selectors/portfolio";
import {getPortfolioRequest} from "../../../redux/actions/portfolio";


class PagePortfolioContainer extends Component{
  componentDidMount() {
    this.props.getPortfolioRequest(1, 10);
  }
  render() {
    return <PagePortfolio {...this.props}/>
  }
}


const mapStateToProps = state => {
  return {
	portfolio: getPortfolioList(state),
  }
};

export default connect(mapStateToProps,{getPortfolioRequest})(PagePortfolioContainer);