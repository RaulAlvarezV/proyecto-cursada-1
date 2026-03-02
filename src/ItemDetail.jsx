import ItemCount from "./ItemCount";

function ItemDetail({ product }) {
  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>

      <ItemCount />
    </div>
  );
}

export default ItemDetail;