import { cn } from '../../lib/utills';

const Label = ({ htmlFor = '', children, className = '' }) => {
  return (
    <label
      htmlFor={htmlFor}
      className={cn(
        'text-xl leading-10 text-primary font-semibold font-nohemi',
        className
      )}
    >
      {children}
    </label>
  );
};

export default Label;
