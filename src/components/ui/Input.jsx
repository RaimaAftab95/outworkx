import React from 'react';
import { cn } from '../../lib/utills';

const Input = ({
  type = '',
  onChange,
  placeholder = '',
  className = '',
  value,
  id = '',
  ...rest
}) => {
  return (
    <input
      type={type}
      onChange={onChange}
      placeholder={placeholder}
      value={value}
      id={id}
      className={cn(
        'w-full text-xl font-medium leading-9 text-primary/70 outline-none placeholder:text-primary/70',
        className
      )}
      {...rest}
    />
  );
};

export default Input;
