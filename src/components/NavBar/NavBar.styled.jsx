import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 30px;
  padding: 20px 50px;
`;

export const StyledLink = styled(Link)`
  color: white;
  font-size: 16px;
`;

export const UserName = styled.p`
  color: red;
  font-size: 20px;
`;

export const ExitButton = styled.button`
  color: white;
  font-size: 16px;
`;
