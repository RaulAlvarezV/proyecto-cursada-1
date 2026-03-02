import { Link } from "react-router-dom";

function Item({ product }) {
  return (
    <div>
      <h3>{product.name}</h3>
      <p>Precio: ${product.price}</p>

      <Link to={`/item/${product.id}`}>
        Ver detalle
      </Link>
    </div>
  );
}

export default Item;