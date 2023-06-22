import "./cards.css";

const Cards = ({ size }) => {
  const cardClass = size === "small" ? "small-card" : "big-card";

  return (
    <div className="flex items-center justify-center">
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
