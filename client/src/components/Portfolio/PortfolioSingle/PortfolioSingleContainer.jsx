import React from 'react';
import PortfolioSingle from "./PortfolioSingle";
import axios from "axios";
import {connect} from "react-redux";
import {setPortfolioSingle} from "../../../redux/portfolio-reducer";

class PortfolioSingleContainer extends React.Component{
  componentDidMount() {
    const url = this.props.match.params.url;
    
    console.log(url)
    
	axios.get(`/api/portfolio/${url}`).then(response => {
	  this.props.setPortfolioSingle(response.data);
	});
  }
  render() {
    return(
      <PortfolioSingle portfolioSingle={this.props.portfolioSingle}/>
	)
  }
}
const mapStateToProps = state => {
  return {
	portfolioSingle: state.portfolioPage.portfolioSingle
  }
}


export default connect(mapStateToProps, {setPortfolioSingle})(PortfolioSingleContainer);