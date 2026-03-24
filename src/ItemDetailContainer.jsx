import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import ItemDetail from "./ItemDetail";
import { db } from "./firebaseConfig";

function ItemDetailContainer() {
  const [item, setItem] = useState(null);
  const [itemCargadoId, setItemCargadoId] = useState("");
  const [error, setError] = useState("");
  const { id } = useParams();
  const loading = itemCargadoId !== id;

  useEffect(() => {
    const productoRef = doc(db, "productos", id);

    getDoc(productoRef)
      .then((res) => {
        if (res.exists()) {
          setItem({ id: res.id, ...res.data() });
        } else {
          setItem(null);
        }
        setError("");
        setItemCargadoId(id);
      })
      .catch(() => {
        setError("No se pudo cargar el producto");
        setItemCargadoId(id);
      });
  }, [id]);

  if (loading) {
    return <h2>Cargando...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  if (!item) {
    return <h2>Producto no encontrado</h2>;
  }

  return <ItemDetail product={item} />;
}

export default ItemDetailContainer;