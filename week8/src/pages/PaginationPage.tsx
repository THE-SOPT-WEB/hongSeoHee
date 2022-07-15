import { useState } from 'react';
import styled from 'styled-components';

import Infinite from '../components/Infinite';
import Pagination from '../components/Pagination';
export default function PaginationPage() {
  const [toggle, setToggle] = useState<number>(1);

  return (
    <>
      <StButton
        onClick={() => {
          toggle > 0 ? setToggle(-1) : setToggle(1);
        }}>
        TOGGLE
      </StButton>
      {toggle > 0 ? <Infinite /> : <Pagination />}
    </>
  );
}
const StButton = styled.button`
  margin: 1rem;
  background-color: ${({ theme }) => theme.colors.yellow};
`;
