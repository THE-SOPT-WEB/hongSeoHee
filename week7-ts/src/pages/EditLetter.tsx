import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

import LetterForm from '../components/LetterForm';
import { EditLetterLocation } from '../utils/dataType';

export default function EditLetter() {
  const { state } = useLocation() as EditLetterLocation;
  return (
    <StContainer>
      <LetterForm letterInfo={state} />
    </StContainer>
  );
}
const StContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
