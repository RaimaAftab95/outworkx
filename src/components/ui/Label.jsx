import { cn } from '../../lib/utills';

const Label = ({ htmlFor = '', children, className = '' }) => {
  return (
    <label
      htmlFor={htmlFor}
      className={cn(
        'font-nohemi text-xl font-semibold leading-10 text-primary',
        className
      )}
    >
      {children}
    </label>
  );
};

export default Label;
