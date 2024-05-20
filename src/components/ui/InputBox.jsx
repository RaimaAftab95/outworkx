import React from 'react';
import { cn } from '../../lib/utills';

const InputBox = ({ children, className = '', onClick, ...rest }) => {
  return (
    <div
      className={cn(
        'flex flex-col rounded-3xl border border-gray px-10 py-5',
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
