import { Link } from "react-router-dom";

const NotFound = () => {
  // console.log("ciao");
  return (
    <div className="flex flex-col items-center justify-center gap-5 mb-[3rem]">
      <h2>Ci dispiace!</h2>
      <p>Sembra che la pagina non esiste o che siano avvenuti errori all&apos;interno del server</p>
      <img src="http://localhost:5173/src/assets/flash.gif" alt="Loading" />
      <button className="btn-action w-[150px]">
        <Link to="/">
          Torna in Home
        </Link>
      </button>
    </div>
  );
};

export default NotFound;
