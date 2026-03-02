import ItemCount from "./ItemCount";

function ItemDetail({ product }) {
  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
      <img src={product.image} alt={product.name} />

      <ItemCount />
    </div>
  );
}

export default ItemDetail;