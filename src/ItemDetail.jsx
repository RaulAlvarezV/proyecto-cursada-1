import { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import { useCart } from "./useCart";

function ItemDetail({ product }) {
  const { agregarItem } = useCart();
  const [cantidadAgregada, setCantidadAgregada] = useState(0);

  const alAgregar = (cantidad) => {
    agregarItem(product, cantidad);
    setCantidadAgregada(cantidad);
  };

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
      <p>Stock disponible: {product.stock}</p>
      <img src={product.image} alt={product.name} />

      {product.stock === 0 ? (
        <h3>Producto sin stock</h3>
      ) : cantidadAgregada > 0 ? (
        <>
          <p>Agregaste {cantidadAgregada} unidad/es al carrito</p>
          <Link to="/cart">Ir al carrito</Link>
        </>
      ) : (
        <ItemCount alAgregar={alAgregar} stock={product.stock} />
      )}
    </div>
  );
}

export default ItemDetail;