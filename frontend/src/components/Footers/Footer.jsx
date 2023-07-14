import FooterDown from "./FooterDown";

const Footer = () => {
  return (
    <footer
      id="footer-top"
      className="bg-[#0A6753] flex flex-col items-center justify-center"
    >
      <div className="text-white font-bold flex flex-col">Spotlight</div>
      <FooterDown />
    </footer>
  );
};

export default Footer;
