import React from 'react';

import { StyledArticle } from './article-style';
const SkeletonStoreArticle = () => {
  return (
    <StyledArticle className="skeleton">
      <a className="placeName skeleton name" />
      <p className="roadAddressName skeleton info" />
      <p className="phone skeleton info" />
    </StyledArticle>
  );
};
export default SkeletonStoreArticle;
