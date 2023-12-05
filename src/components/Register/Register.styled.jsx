import styled from '@emotion/styled';
import mediaBp from 'styles/breackpoints';
import { Link as link } from 'react-router-dom';

export const Container = styled.div`
  width: 200px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px;
  border: 1px solid grey;
  padding: 10px;
  box-sizing: border-box;
  ${mediaBp('tablet')} {
    width: 300px;
    height: 100%;
    padding: 20px;
  }
  ${mediaBp('desktop')} {
    width: 400px;
    height: 100%;
    padding: 30px;
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

export const InputWrapper = styled.div`
  display: flex;
  position: relative;
`;

export const IconEye = styled.span`
  position: absolute;
  padding-top: 11px;
  top: -20%;
  left: 85%;
  cursor: pointer;
  ${mediaBp('tablet')} {
    top: -10%;
    left: 90%;
  }
  ${mediaBp('desktop')} {
    top: -10%;
    left: 90%;
  }
`;

export const IconEyeConfirm = styled.span`
  position: absolute;
  padding-top: 11px;
  top: -20%;
  left: 85%;
  cursor: pointer;
  ${mediaBp('tablet')} {
    top: -10%;
    left: 90%;
  }
  ${mediaBp('desktop')} {
    top: -10%;
    left: 90%;
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
