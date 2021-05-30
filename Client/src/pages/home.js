// import React, { useEffect } from 'react';
import FeedComponent from "../components/feeds/index";
import { CustomSearch, Test, CustomLoader,PostField } from "../components/common";

import { getFedds, postComment } from "../redux/Actions/feedActions";
import { connect } from "react-redux";

import React, { Component } from "react";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      comment: "",
    };
  }
  componentDidMount() {
    this.props.getFedds();
  }

  handleModal = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  handleInputChange = (e) => {
    this.setState({ comment: e.target.value });
  };
  commentSubmit = (id) => {
    this.props.postComment(id, this.state.comment);
  };
  
  render() {
    const feeds = this.props.feeds_object.feedsData;
    const isLoading = this.props.getFeedsInProgress;
    return (
      <>
        <CustomSearch />
        {isLoading&&feeds ? (
          <CustomLoader />
        ) : (
          <>
            {" "}
            {feeds
              ? feeds.map((data, key) => {
                  return (
                    <FeedComponent
                      handleInputChange={this.handleInputChange}
                      handleModal={this.handleModal}
                      commentSubmit={this.commentSubmit}
                      isOpen={this.state.isOpen}
                      data={data}
                      key={key}
                    />
                  );
                })
              : null}{" "}
          </>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // data for users
    feeds_object: state.feed,
    getFeedsInProgress: state.api.feeds.getFeedsInProgress,
    // loaders
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getFedds: () => dispatch(getFedds()),
    postComment: (id, comment) => dispatch(postComment(id, comment)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
