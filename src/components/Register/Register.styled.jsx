import styled from '@emotion/styled';
import mediaBp from 'styles/breackpoints';

export const Container = styled.div`
  width: 200px;
  height: 300px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  border: 1px solid grey;
  padding: 10px;
  box-sizing: border-box;
  ${mediaBp('tablet')} {
    width: 300px;
    height: 400px;
    padding: 20px;
  }
  ${mediaBp('desktop')} {
    width: 400px;
    height: 400px;
    padding: 30px;
  }
`;
