import {InputContainer} from './style'

function Input({value}) {
  return (
    <InputContainer>
     <input disabled value={value} />
    </InputContainer>
  );
}

export default Input;
