const Error = ({ children }) => {
  return children && <p className="text-red-600 font-semibold">{children}</p>;
};

export default Error;
