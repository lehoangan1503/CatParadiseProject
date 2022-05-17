import "../../../styles/CatCard.scss";
const CatCard = ({
  cat: { image, name, origin, temperament, life_span, weight, description },
}) => {
  return (
    <div className="cat-card">
      <div className="image-container"><img src={image.url} alt="Cat not Found" /></div>
      <div className="cat-card-body">
        <p>
          Name: <span>{name}</span>
        </p>

        <p>
          Origin: <span>{origin}</span>
        </p>
        <p>
          Temperament: <span>{temperament}</span>
        </p>
        <p>
          Life span: <span>{life_span}</span>
        </p>
        <p>
          Weight: <span>{weight.metric}</span>
        </p>
        <p>
          Description: <span>{description}</span>
        </p>
      </div>
    </div>
  );
};

export default CatCard;
