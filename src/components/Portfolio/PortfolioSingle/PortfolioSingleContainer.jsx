import React from 'react';
import PortfolioSingle from "./PortfolioSingle";
import {connect} from "react-redux";
import Breadcrumbs from "../../common/Breadcrumbs/Breadcrumbs";
import {getPortfolioSingleRequest} from "../../../redux/actions/portfolio";
import Page from "../../../pages/_layout/Page/Page";
import {getPortfolioSingle} from "../../../redux/selectors/portfolio";

class PortfolioSingleContainer extends React.Component {
  
  componentDidMount() {
	const url = this.props.match.params.url;
	this.props.getPortfolioSingleRequest(url)
  }
  
  render() {
	if (!this.props.portfolioSingle) return false;
	const breadcrumbsConstructor = [
	  {
		'name': 'Портфолио',
		'url': '/Portfolio/'
	  },
	  {
		'name': `${this.props.portfolioSingle.title}`,
		'url': `${this.props.match.url}`
	  }];
	
	return (
	  <Page pageMeta={{
		title: `${this.props.portfolioSingle.title}`,
		description: 'Бла бла бла'}}>
		<PortfolioSingle portfolioSingle={this.props.portfolioSingle}
						 breadcrumbs={<Breadcrumbs data={breadcrumbsConstructor}/>}/>
	  </Page>
	)
  }
}

const mapStateToProps = state => {
  return {
	portfolioSingle: getPortfolioSingle(state)
  }
};

export default connect(mapStateToProps, {getPortfolioSingleRequest})(PortfolioSingleContainer)