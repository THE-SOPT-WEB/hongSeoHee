import React from 'react';

import { StyledArticle } from './article-style';

const StoreArticle = props => {
  return (
    <StyledArticle>
      <a className="placeName" href={props.placeUrl} target="_blank" rel="noreferrer">
        {props.placeName}
      </a>
      <p className="roadAddressName">{props.roadAddressName}</p>
      <p className="phone">{props.phone ? props.phone : '❌ 전화번호 ❌'}</p>
    </StyledArticle>
  );
};
export default StoreArticle;
