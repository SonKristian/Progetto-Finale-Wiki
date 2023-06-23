import "./cards.css";

const Cards = ({ size, sizeContainer}) => {
  const cardClass = size === "small" ? "small-card" : "big-card";
  const containerClass = sizeContainer === "small" ? "container-small" : "container-big"
 
  return (
    <div className={`${containerClass}`}>
      <div className={`${cardClass}`}>
        <img
          src="https://www.superherodb.com/pictures2/portraits/10/100/10060.jpg"
          alt="personaggio"
        />
      </div>
    </div>
  );
};

export default Cards;
