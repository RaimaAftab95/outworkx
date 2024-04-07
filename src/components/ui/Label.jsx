import { cn } from '../../lib/utills';

const Label = ({ htmlFor = '', children, className = '' }) => {
  return (
    <label
      htmlFor={htmlFor}
      className={cn(
        'text-xl leading-[42px] text-primary font-semibold font-nohemi',
        className
      )}
    >
      {children}
    </label>
  );
};

export default Label;
