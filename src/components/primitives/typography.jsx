export function H1({ className = '', children }) {
  const defaultClasses =
    'font-poppins scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl';

  return <h1 className={`${defaultClasses} ${className}`}>{children}</h1>;
}

export function H2({ className = '', children }) {
  const defaultClasses =
    'font-poppins scroll-m-20 text-3xl font-semibold tracking-tight lg:text-4xl';

  return <h2 className={`${defaultClasses} ${className}`}>{children}</h2>;
}

export function H3({ className = '', children }) {
  const defaultClasses =
    'font-poppins scroll-m-20 text-2xl font-semibold tracking-tight lg:text-3xl';

  return <h3 className={`${defaultClasses} ${className}`}>{children}</h3>;
}

export function H4({ className = '', children }) {
  const defaultClasses =
    'font-poppins scroll-m-20 text-xl font-semibold tracking-tight lg:text-2xl';

  return <h4 className={`${defaultClasses} ${className}`}>{children}</h4>;
}

export function H5({ className = '', children }) {
  const defaultClasses =
    'font-poppins scroll-m-20 text-lg font-semibold tracking-tight lg:text-xl';

  return <h5 className={`${defaultClasses} ${className}`}>{children}</h5>;
}

export function H6({ className = '', children }) {
  const defaultClasses =
    'font-poppins scroll-m-20 text-base font-semibold tracking-tight lg:text-lg';

  return <h6 className={`${defaultClasses} ${className}`}>{children}</h6>;
}

export function P({ className = '', children }) {
  const defaultClasses = 'font-inter leading-7 [&:not(:first-child)]:mt-6';

  return <p className={`${defaultClasses} ${className}`}>{children}</p>;
}

export function Lead({ className = '', children }) {
  const defaultClasses = 'font-poppins text-xl';

  return <p className={`${defaultClasses} ${className}`}>{children}</p>;
}

export function Large({ className = '', children }) {
  const defaultClasses = 'font-poppins text-lg font-semibold';

  return <div className={`${defaultClasses} ${className}`}>{children}</div>;
}

export function Small({ className = '', children }) {
  const defaultClasses = 'font-inter text-sm font-medium leading-none';

  return <small className={`${defaultClasses} ${className}`}>{children}</small>;
}

export function Muted({ className = '', children }) {
  const defaultClasses = 'font-inter text-muted-foreground text-sm';

  return <p className={`${defaultClasses} ${className}`}>{children}</p>;
}
