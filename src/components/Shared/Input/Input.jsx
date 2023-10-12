import { Input } from './Input.styled';

const CustomInput = ({
  id = 'id',
  name = 'password',
  type = 'text',
  autoComplete = 'off',
  placeholder,
}) => {
  return (
    <Input id={id} placeholder={placeholder} name={name} type={type} autoComplete={autoComplete} />
  );
};

export default CustomInput;
