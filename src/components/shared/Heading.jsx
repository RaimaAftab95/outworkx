const Heading = ({ children }) => {
  return (
    <h2 className="text-3xl leading-9 sm:text-4xl sm:leading-10 md:text-customSize md:leading-10">
      {children}
    </h2>
  );
};

export default Heading;
