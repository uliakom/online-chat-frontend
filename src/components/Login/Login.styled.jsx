import styled from '@emotion/styled';
import mediaBp from 'styles/breackpoints';
import { Link as link } from 'react-router-dom';

export const BtnWrapp = styled.div`
  display: flex;
  margin-bottom: 20px;
  justify-content: space-between;
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

export const Link = styled(link)`
  display: inline-block;
  text-decoration-line: underline;
  color: #fd6262;
  margin-left: 5px;
`;

export const ErrorMsg = styled.p`
  color: #fd6262;
`;
