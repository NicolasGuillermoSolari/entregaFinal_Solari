import React, { useEffect, useState } from "react";
import ItemList from "./itemList";
import pedirProductos from "./pedirProductos";

export const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    pedirProductos().then((res) => {
      setProductos(res);
    });
  }, []);

  return (
    <div>
      <ItemList productos={productos} />
    </div>
  );
};
