import styled from '@emotion/styled';
import { Field } from 'formik';
import mediaBp from 'styles/breackpoints';

export const Input = styled(Field)`
  width: 100%;
  box-sizing: border-box;
  background-color: transparent;
  margin-bottom: 10px;
  border: 1px solid grey;
  border-radius: 5px;
  padding-left: 10px;
  color: white;
  ${mediaBp('tablet')} {
    height: 30px;
    margin-bottom: 20px;
  }
  ${mediaBp('desktop')} {
    height: 30px;
    margin-bottom: 30px;
  }

  :focus {
    border: 1px solid #1b96ff;
    box-shadow: rgb(1, 118, 211) 0px 0px 3px 0px;
  }
`;
