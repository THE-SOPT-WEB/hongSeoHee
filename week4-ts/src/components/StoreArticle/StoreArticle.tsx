import React from 'react';

import { StyledArticle } from './article-style';
interface StoreArticleProps {
  placeUrl: string;
  placeName: string;
  distance: string;
  roadAddressName: string;
  phone: string;
}
function StoreArticle(props: StoreArticleProps) {
  const { placeUrl, placeName, distance, roadAddressName, phone } = props;
  return (
    <StyledArticle>
      <a className="placeName" href={placeUrl} target="_blank" rel="noreferrer">
        {placeName}
      </a>
      <p className="roadAddressName">{distance ? `${distance}  m` : roadAddressName}</p>
      <p className="phone">{phone ? phone : '❌ 전화번호 ❌'}</p>
    </StyledArticle>
  );
}
export default StoreArticle;
