import { Link } from "react-router-dom";

function Item({ product }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "15px",
      margin: "15px",
      width: "250px",
      textAlign: "center"
    }}>
      <img 
        src={product.image} 
        alt={product.name} 
        style={{ width: "100%", height: "200px", objectFit: "cover" }}
      />

      <h3>{product.name}</h3>
      <p>Precio: ${product.price}</p>

      <Link to={`/item/${product.id}`}>
        Ver detalle
      </Link>
    </div>
  );
}

export default Item;