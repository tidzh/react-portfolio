import React, { Component } from "react";
import WidgetReviews from "./WidgetReviews";
import {
  getReviews,
  getReviewsFetching
} from "../../../redux/selectors/widget";
import { connect } from "react-redux";
import { setReviewsRequest } from "../../../redux/actions/widgets";
import { ProgressCircular } from "../../common/Progress/Progress";

class WidgetReviewsContainer extends Component {
  componentDidMount() {
    this.props.setReviewsRequest();
  }
  render() {
    const { reviews, isFetching } = this.props;
    if (isFetching) return <ProgressCircular />;
    return <WidgetReviews reviews={reviews} />;
  }
}

const mapStateToProps = state => {
  return {
    reviews: getReviews(state),
    isFetching: getReviewsFetching(state)
  };
};
export default connect(mapStateToProps, { setReviewsRequest })(
  WidgetReviewsContainer
);
