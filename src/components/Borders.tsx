const Borders = () => {
  return (
    <div className="z-10">
      <div
        className="absolute right-0 hidden h-full w-[2rem] xl:block"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(11,10,10,0) 0%, rgba(11,10,10,1) 100%)",
        }}
      ></div>
      <div
        className="absolute left-0 hidden h-full w-[2rem] xl:block"
        style={{
          backgroundImage:
            "linear-gradient(270deg, rgba(11,10,10,0) 0%, rgba(11,10,10,1) 100%)",
        }}
      ></div>
    </div>
  );
};

export default Borders;
