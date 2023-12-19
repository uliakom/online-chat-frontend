import styled from '@emotion/styled';
import mediaBp from 'styles/breackpoints';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ChatContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 5px 5px;
  ${mediaBp('tablet')} {
    width: 60%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px;
  }
  ${mediaBp('desktop')} {
    width: 60%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px;
  }
`;

export const LogsContainer = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid white;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${mediaBp('tablet')} {
    width: 35%;
    height: 80%;
  }
  ${mediaBp('desktop')} {
    width: 35%;
    height: 80%;
  }
`;

export const MessagesContainer = styled.div`
  width: 75%;
  height: 80%;
  border: 1px solid white;
`;
