import React, { useState } from "react";
import { CustomDialog, PostField, CustomFeedView } from "../common";
import Comments from "./FeedComments/index";
export default function FeedCard(props) {
  const { userName, postInput, _id, date, userId, comments } = props.data;
  const { handleInputChange, commentSubmit } = props;
  const [isOpen, setisOpen] = useState(false);

  const handleChildId = () => {
    commentSubmit(_id);
  };
  const handleModal = () => {
    setisOpen(!isOpen);
  };
  return (
    <>
      <CustomFeedView
        data={props.data}
        handleModal={handleModal}
        comments={comments}
        commentAction={true}
      />
      {}

      <CustomDialog handleModal={handleModal} open={isOpen}>
        <CustomFeedView data={props.data} commentAction={true} />
        <PostField
          exitButton={false}
          handleSubmit={handleChildId}
          handleInputChange={handleInputChange}
        />

        {comments
          ? comments.map((data, key) => {
              return <Comments key={key} data={data} />;
            })
          : null}
      </CustomDialog>
    </>
  );
}
