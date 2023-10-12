import styled from '@emotion/styled';
import mediaBp from 'styles/breackpoints';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  text-align: center;
  color: grey;
  margin-bottom: 20px;
  font-size: 16px;
  ${mediaBp('tablet')} {
    margin-bottom: 30px;
    font-size: 24px;
  }
  ${mediaBp('desktop')} {
    margin-bottom: 40px;
    font-size: 36px;
  }
`;
