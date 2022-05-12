import SkeletonStoreArticle from 'components/StoreArticle/SkeletonStoreArticle';
import StoreArticle from 'components/StoreArticle/StoreArticle';
import React from 'react';
function ResultsSection(props) {
  const { isSearch, results } = props;

  if (isSearch) return new Array(10).fill(1).map((_, i) => <SkeletonStoreArticle key={i} />);
  if (results.length === 0) return <StoreArticle placeName="❌ 빵집이 없다니ㅠㅠ ❌" />;
  return results.map(result => (
    <StoreArticle
      key={result.id}
      placeUrl={result.place_url}
      placeName={`🧁 ${result.place_name}🧁`}
      roadAddressName={result.road_address_name}
      distance={result.distance}
      phone={result.phone}
    />
  ));
}

export default ResultsSection;
