import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const logoanimation = keyframes`
0% {
      transform: scale(1);
    }

    50% {
      transform: scale(1.5);
    }

    100% {
      transform: scale(1);
    }`;

export const StyledLogo = styled.img`
  height: 15vmin;
  pointer-events: none;
  animation: ${logoanimation} infinite 4000ms linear;
`;
