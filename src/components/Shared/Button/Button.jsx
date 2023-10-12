import { StyledBtn } from './Button.styled';

const Button = ({ disabled = false, text, children, onClick, type = 'submit' }) => {
  return (
    <>
      <StyledBtn disabled={disabled} onClick={onClick} type={type}>
        {children || text}
      </StyledBtn>
    </>
  );
};

export default Button;
