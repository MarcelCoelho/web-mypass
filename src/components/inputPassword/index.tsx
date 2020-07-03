import React, {
  InputHTMLAttributes,
  useEffect,
  useRef,
  useState,
  useCallback,
} from 'react';
import { FiAlertCircle, FiEye, FiEyeOff } from 'react-icons/fi';
import { useField } from '@unform/core';
import { Container, Error } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  value?: string;
}

const InputPassword: React.FC<InputProps> = ({ name, value, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const { fieldName, defaultValue, error, registerField } = useField(name);

  const [iconEyeOff, setIconEyeOff] = useState<boolean>(true);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputRef.current?.value);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  const handleEye = () => {
    setIconEyeOff(!iconEyeOff);
  };

  return (
    <Container isErrored={!!error} isFocused={isFocused} isFilled={isFilled}>
      <input
        type={iconEyeOff ? "password" : "text"}
        value={value}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        defaultValue={defaultValue}
        ref={inputRef}
        {...rest}
      />
      <div onClick={handleEye}>
        {iconEyeOff ?
          <FiEyeOff size={22} />
          :
          <FiEye size={22} />
        }
      </div>
      {error && (
        <Error title={error}>
          <FiAlertCircle color="#c53030" size={20} />
        </Error>
      )}

    </Container>
  );
};
export default InputPassword;
