const Footer = () => {
  return (
    <footer className="relative bg-background">
      <div
        className="absolute -top-[100px] h-[100px] w-full"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(217,217,217,0) 0%, rgba(11,10,10,1) 100%)",
        }}
      ></div>
      <div className="px-8 py-8"></div>
    </footer>
  );
};

export default Footer;
