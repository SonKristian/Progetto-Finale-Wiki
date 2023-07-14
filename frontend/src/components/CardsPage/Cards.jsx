import "./css/cards.css";

const Cards = ({ size, sizeContainer, url, name }) => {
  const cardClass = size === "small" ? "small-card" : "big-card";
  const containerClass =
    sizeContainer === "small" ? "container-small" : "container-big";

  return (
    <div className={`${containerClass}`}>
      <div className={`${cardClass}`}>
        <img src={url} alt="personaggio" />
        <p className="text-white mt-2 text-center">{name}</p>
      </div>
    </div>
  );
};

export default Cards;
