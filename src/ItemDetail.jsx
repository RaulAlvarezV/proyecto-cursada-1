import ItemCount from "./ItemCount";
import { useCart } from "./useCart";

function ItemDetail({ product }) {
  const { agregarItem } = useCart();

  const alAgregar = (cantidad) => {
    agregarItem(product, cantidad);
    alert("Producto agregado al carrito");
  };

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
      <img src={product.image} alt={product.name} />

      <ItemCount alAgregar={alAgregar} />
    </div>
  );
}

export default ItemDetail;