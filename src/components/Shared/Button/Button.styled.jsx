import styled from '@emotion/styled';
import mediaBp from 'styles/breackpoints';

export const StyledBtn = styled.button`
  border: 1px solid rgba(255, 255, 255, 0.1);
  background-color: rgba(63, 70, 195, 0.9);
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.4);
  width: 70%;
  background-image: linear-gradient(to right,#e052a0,#f15c41);
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};;
  border-radius: 10px;
  color: #fff;
  font-weight: 500;
  text-align: center;
  text-transform: uppercase;
  height: 36px;
  line-height: 36px;
  padding: 0 10px;
  font-size: 14px;
  margin-bottom: 20px; 
  ${mediaBp('tablet')} {
    margin-bottom: 20px;

  }
  ${mediaBp('desktop')} {
    margin-bottom: 20px;
    
  }
:hover {
  background-image: linear-gradient(to right,#3ec7e0,#526bf4);
  
`;
