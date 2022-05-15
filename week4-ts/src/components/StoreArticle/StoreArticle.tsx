import React from "react";

import { StArticle } from "./article-style";
interface StArticleProps {
  placeUrl: string;
  placeName: string;
  distance: string;
  roadAddressName: string;
  phone: string;
}
function StoreArticle(props: StArticleProps) {
  const { placeUrl, placeName, distance, roadAddressName, phone } = props;
  return (
    <StArticle>
      <a className="placeName" href={placeUrl} target="_blank" rel="noreferrer">
        {placeName}
      </a>
      <p className="roadAddressName">
        {distance ? `${distance}  m` : roadAddressName}
      </p>
      <p className="phone">{phone ? phone : "❌ 전화번호 ❌"}</p>
    </StArticle>
  );
}
export default StoreArticle;
