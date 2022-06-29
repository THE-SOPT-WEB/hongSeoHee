import styled from 'styled-components';

import { PostInfo } from '../../utils/dataType';

export default function Post(props: PostInfo) {
  const { title, url } = props;
  return (
    <StPost>
      <h2>{title}</h2>
      <img src={url} alt="post-img" />
    </StPost>
  );
}
const StPost = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 20rem;
  height: 20rem;
  max-height: 20rem;
  padding: 1rem;

  gap: 0.5rem;
  border-radius: 1.8rem;
  box-shadow: 0.5rem 0.5rem 1rem 0.5rem lightgray;

  & > h2 {
    height: 3rem;
    font-size: 1rem;
  }

  & > img {
    width: 15rem;
    height: 15rem;
  }
`;
