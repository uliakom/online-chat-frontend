import styled from '@emotion/styled';
import mediaBp from 'styles/breackpoints';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0px 0px 0px;
  ${mediaBp('tablet')} {
    padding: 20px 0px 0px 0px;
  }
  ${mediaBp('desktop')} {
    padding: 30px 0px 0px 0px;
  }
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

export const ErrorMsg = styled.p`
  color: #fd6262;
`;
