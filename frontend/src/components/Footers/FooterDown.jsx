const FooterDown = () => {
  return (
    <div
      id="footer-down"
      className="flex flex-row flex-wrap mb-5  bg-[#108E73] w-full items-center justify-center gap-8"
    >
      <div className="mt-4">
        <h2 className="text-white font-bold cursor-pointer">About us</h2>
        <ul className="flex flex-col w-[170px] text-white h-[250px] items-start cursor-pointer">
          <li className="hover:text-black">What is Spotlight?</li>
          <li className="hover:text-black">Why Spotlight?</li>
          <li className="hover:text-black">Info on Spotlight</li>
        </ul>
      </div>

      <div className="mt-4">
        <h2 className="text-white font-bold cursor-pointer">Need Help</h2>
        <ul className="flex flex-col w-[170px] text-white h-[250px] items-start cursor-pointer">
          <li className="hover:text-black">Contact Us</li>
          <li className="hover:text-black">Customer Service</li>
          <li className="hover:text-black">Accessibility</li>
        </ul>
      </div>

      <div className="mt-4">
        <h2 className="text-white font-bold cursor-pointer">
          Support our Mission
        </h2>
        <ul className="flex flex-col w-[170px] text-white h-[250px] items-start cursor-pointer">
          <li className="hover:text-black">Donation</li>
          <li className="hover:text-black">Advices</li>
          <li className="hover:text-black">Report Bug</li>
          <li className="hover:text-black">Work With us</li>
        </ul>
      </div>

      <div className="mt-4">
        <h2 className="text-white font-bold cursor-pointer">Other </h2>
        <ul className="flex flex-col w-[170px] text-white h-[250px] items-start cursor-pointer">
          <li className="hover:text-black">Help & FAQ</li>
          <li className="hover:text-black">Terms & Conditions</li>
          <li className="hover:text-black">Privacy Policy</li>
        </ul>
      </div>

      <div className="flex flex-col">
        <p>
          Spotlight Copyright © 2023 Spotlight - All rights reserved || Designed
          By: SonKristian
        </p>
      </div>

    </div>
  );
};

export default FooterDown;
