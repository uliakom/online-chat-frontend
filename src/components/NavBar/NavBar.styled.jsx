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
`;
