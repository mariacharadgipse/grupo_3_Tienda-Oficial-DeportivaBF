import PropTypes from "prop-types";

const Card = ({ product }) => {
  // console.log(product);
  return (
    <article className="w-80 bg-slate-600 text-center transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
      <h3 className="font-bold">{product.name}</h3>
      <small>Precio: {product.price}</small>
    </article>
  );
};

Card.propTypes = {
  game: PropTypes.object,
};

export default Card;
