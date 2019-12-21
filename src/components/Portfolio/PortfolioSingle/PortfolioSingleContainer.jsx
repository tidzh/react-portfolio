import React from 'react';
import PortfolioSingle from "./PortfolioSingle";
import {connect} from "react-redux";
import Breadcrumbs from "../../common/Breadcrumbs/Breadcrumbs";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {getPortfolioSingle} from "../../../actions/portfolio";

class PortfolioSingleContainer extends React.Component{
  
  componentDidMount() {
    const url = this.props.match.params.url;
	this.props.getPortfolioSingle(url)
  }
  render() {
    if(!this.props.portfolioSingle) {
       return false
	}
	const breadcrumbsConstructor = [
	  {
		'name':'Портфолио',
		'url':'/Portfolio/'
	  },
	  {
		'name': `${this.props.portfolioSingle.title}`,
		'url':`${this.props.match.url}`
	  }]
	
    return(
      <PortfolioSingle portfolioSingle={this.props.portfolioSingle} breadcrumbs={<Breadcrumbs data={breadcrumbsConstructor}/>}/>
	)
  }
}
const mapStateToProps = state => {
  return {
	portfolioSingle: state.portfolioPage.portfolioSingle
  }
}


export default compose(
  connect(mapStateToProps, {getPortfolioSingle}),
  withRouter
)(PortfolioSingleContainer)