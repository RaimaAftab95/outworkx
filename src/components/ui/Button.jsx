import { Link } from 'react-router-dom';
import { cn } from '../../lib/utills';

const Button = ({
  type = 'button',
  to = '',
  className = '',
  children,
  onClick,
  size = 'lg',
  variant = 'primary',
  loading,
  ...rest
}) => {
  const styles = `font-medium border ${
    variant === 'primary'
      ? 'text-white bg-primary hover:border-gray hover:bg-transparent hover:text-primary border-transparent'
      : 'bg-transparent text-primary border border-gray hover:bg-primary hover:border-transparent hover:text-white'
  } transition-all rounded-full ${
    size === 'lg' ? 'py-4 px-10 text-xl' : 'py-3 px-5 text-base'
  }`;

  return to ? (
    <Link to={to} className={cn(styles, className)} {...rest}>
      {children}
    </Link>
  ) : (
    <button
      className={cn(styles, className)}
      onClick={onClick}
      type={type}
      {...rest}
      disabled={loading}
    >
      {loading ? (
        <div className="text-center w-full flex items-center justify-center">
          <img src="/images/loading.gif" className="w-8" alt="loading" />
        </div>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
