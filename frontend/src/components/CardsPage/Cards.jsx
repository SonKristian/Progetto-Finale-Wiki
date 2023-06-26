import "./cards.css";

const Cards = ({ size, sizeContainer}) => {
  const cardClass = size === "small" ? "small-card" : "big-card";
  const containerClass = sizeContainer === "small" ? "container-small" : "container-big"
 
  return (
    <div className={`${containerClass}`}>
      <div className={`${cardClass}`}>
        <img
          src=""
          alt="personaggio"
        />
      </div>
    </div>
  );
};

export default Cards;
