import React from 'react';
import PortfolioSingle from "./PortfolioSingle";
import axios from "axios";
import {connect} from "react-redux";
import {setPortfolioSingle} from "../../../redux/portfolio-reducer";
import Breadcrumbs from "../../common/Breadcrumbs/Breadcrumbs";
import {withRouter} from "react-router-dom";

class PortfolioSingleContainer extends React.Component{
  componentDidMount() {
    const url = this.props.match.params.url;
	axios.get(`/api/portfolio/${url}`).then(response => {
	  this.props.setPortfolioSingle(response.data);
	});
  }
  render() {
    if(!this.props.portfolioSingle) {
       return false
	}
	const breadcrumbsConstructor = [
	  {
		'name':'Портфолио',
		'url':'/portfolio/'
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


export default connect(mapStateToProps, {setPortfolioSingle})(withRouter(PortfolioSingleContainer));