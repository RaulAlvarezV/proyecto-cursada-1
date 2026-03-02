import { useState } from "react";

function ItemCount() {
  const [count, setCount] = useState(1);

  const sumar = () => setCount(count + 1);
  const restar = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <button onClick={restar}>-</button>
      <span> {count} </span>
      <button onClick={sumar}>+</button>
      <br />
      <button>Agregar al carrito</button>
    </div>
  );
}

export default ItemCount;