import {connect} from "react-redux";
import ArticleList from "./ArticleList";
import axios from 'axios';


// axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
// console.log(response.data.items)
// });


const mapStateToProps = state => {
  console.log(state)
  return {
   portfolioList: state.portfolioPage.portfolio
  }
  
}

const ArticleListContainer = connect(mapStateToProps)(ArticleList);
export default ArticleListContainer;