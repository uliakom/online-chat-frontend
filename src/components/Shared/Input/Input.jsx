import { Input } from './Input.styled';

// const CustomInput = ({ id = 'id', name, type = 'text', autoComplete = 'off', placeholder }) => {
//   return (
//     <Input id={id} placeholder={placeholder} name={name} type={type} autoComplete={autoComplete} />
//   );
// };

// export default CustomInput;

const CustomInput = props => {
  const { name, ...rest } = props;
  return <Input name={name} {...rest} />;
};

export default CustomInput;
