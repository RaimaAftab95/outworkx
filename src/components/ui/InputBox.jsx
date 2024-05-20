import React from 'react';
import { cn } from '../../lib/utills';

const InputBox = ({ children, className = '', onClick, ...rest }) => {
  return (
    <div
      className={cn(
        'flex flex-col py-5 px-10 rounded-3xl border border-gray',
        className
      )}
      onClick={onClick}
      {...rest}
    >
      {children}
    </div>
  );
};

export default InputBox;
