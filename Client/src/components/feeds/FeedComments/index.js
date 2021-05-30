import React from "react";

import { CustomFeedView } from "../../common";

export default function Comments(props) {
  return (
    <>
      <CustomFeedView data={props.data} commentAction={false} />
    </>
  );
}
