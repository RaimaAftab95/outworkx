const Heading = ({ children }) => {
  return (
    <h2 className="text-[30px] leading-[35px] sm:text-[35px] sm:leading-[40px] md:text-[40px] md:leading-[45px]">
      {children}
    </h2>
  );
};

export default Heading;
