import { useState } from "react";

function ItemCount({ alAgregar }) {
  const [cantidad, setCantidad] = useState(1);

  const sumar = () => setCantidad(cantidad + 1);
  const restar = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  return (
    <div>
      <button onClick={restar}>-</button>
      <span> {cantidad} </span>
      <button onClick={sumar}>+</button>
      <br />
      <button onClick={() => alAgregar && alAgregar(cantidad)}>Agregar al carrito</button>
    </div>
  );
}

export default ItemCount;