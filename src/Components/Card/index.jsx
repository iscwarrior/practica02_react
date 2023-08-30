const Card = (props) => {
  const { name, description, img } = props;
  return (
    <div>
      <hr />
      <h1>{name} </h1>
      <p>{description}</p>
      <img src={img} />
      <hr />
    </div>
  );
};

export default Card;
