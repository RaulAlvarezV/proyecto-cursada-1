import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../data";
import ItemList from "./ItemList";

function ItemListContainer() {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const getProducts = new Promise((resolve) => {
      setTimeout(() => {
        if (categoryId) {
          resolve(products.filter((prod) => prod.category === categoryId));
        } else {
          resolve(products);
        }
      }, 1000);
    });

    getProducts.then((res) => setItems(res));
  }, [categoryId]);

  return (
    <>
      <h2>Catálogo de productos</h2>
      <ItemList items={items} />
    </>
  );
}

export default ItemListContainer;