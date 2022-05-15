import React from "react";

import { StArticle } from "./article-style";
const SkeletonStoreArticle = () => {
  return (
    <StArticle className="skeleton">
      <p className="placeName skeleton name" />
      <p className="roadAddressName skeleton info" />
      <p className="phone skeleton info" />
    </StArticle>
  );
};
export default SkeletonStoreArticle;
