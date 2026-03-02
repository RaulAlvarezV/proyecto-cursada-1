import Item from "./Item";

function ItemList({ items }) {
  return (
    <div style={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center"
    }}>
      {items.map((prod) => (
        <Item key={prod.id} product={prod} />
      ))}
    </div>
  );
}

export default ItemList;