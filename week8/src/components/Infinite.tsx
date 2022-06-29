import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { PostInfo } from '../utils/dataType';
import { getAlbums } from '../utils/lib/api';
import Post from './common/Post';
import Spinner from './common/Spinner';
export default function Infinite() {
  const [posts, setPosts] = useState<PostInfo[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const loadPointRef = useRef<HTMLDivElement>(null);
  const currentPage = useRef(1);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const result = await getAlbums(currentPage.current, currentPage.current);
      setPosts((prevPost) => [...prevPost, ...result.data]);
      currentPage.current += 1;
      // setCurrentPage((prevPage) => prevPage + 1);
    } catch (error) {
      setPosts([]);
    } finally {
      setIsLoading(false);
    }
  };

  const observeLoadPoint = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
    entries.forEach(async (entry) => {
      if (entry.isIntersecting && !isLoading) {
        observer.unobserve(entry.target);
        await fetchData();
        observer.observe(entry.target);
      }
    });
  };
  useEffect(() => {
    let observer: IntersectionObserver;
    if (loadPointRef.current) {
      observer = new IntersectionObserver(observeLoadPoint, {
        threshold: 1,
      });
      observer.observe(loadPointRef.current);
    }

    return () => {
      observer && observer.disconnect();
    };
  }, []);
  return (
    <StContainer>
      <ul>
        {posts.map(({ ...postData }, idx) => (
          <Post key={idx} {...postData} />
        ))}
      </ul>
      <div ref={loadPointRef}>{isLoading && <Spinner />}</div>
    </StContainer>
  );
}
const StContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 1rem;

  & > ul {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 1.5rem;
    margin: 0;
  }
`;
