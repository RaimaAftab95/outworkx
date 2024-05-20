const Error = ({ children }) => {
  return children && <p className="font-semibold text-red-600">{children}</p>;
};

export default Error;
