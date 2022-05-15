import SkeletonStoreArticle from 'components/StoreArticle/SkeletonStoreArticle';
import StoreArticle from 'components/StoreArticle/StoreArticle';
import { Result } from 'core/resultsType';
import React from 'react';

import { StyledArticle } from './StoreArticle/article-style';

interface ResultsSectionProps {
  isSearch: boolean;
  results: Result[];
}
function ResultsSection(props: ResultsSectionProps) {
  const { isSearch, results } = props;

  if (isSearch)
    return (
      <>
        {new Array(10).fill(1).map((_, i) => (
          <SkeletonStoreArticle key={i} />
        ))}
      </>
    );
  if (results.length === 0) return <StyledArticle>❌ 빵집이 없다니ㅠㅠ ❌</StyledArticle>;
  return (
    <>
      {results.map(result => (
        <StoreArticle
          key={result.id}
          placeUrl={result.place_url}
          placeName={`🧁 ${result.place_name}🧁`}
          roadAddressName={result.road_address_name}
          distance={result.distance}
          phone={result.phone}
        />
      ))}
    </>
  );
}

export default ResultsSection;
