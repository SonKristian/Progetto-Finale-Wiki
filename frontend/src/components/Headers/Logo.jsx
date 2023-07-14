const Logo = ({ isDark }) => {
  return (
    <>
      <div className={isDark ? "light-logo" : "dark-logo"}>
        {!isDark ? (
          <img
            src="http://localhost:5173/src/assets/logoSpotlight.svg"
            alt="light-mode-logo"
            className="w-[50px] m-[2rem]"
          />
        ) : (
          <img
            src="http://localhost:5173/src/assets/negativeLogo.svg"
            alt="dark-mode-logo"
            className="w-[50px] m-[2rem]"
          />
        )}
      </div>
    </>
  );
};

export default Logo;
