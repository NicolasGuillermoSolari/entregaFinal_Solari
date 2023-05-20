import React, { useEffect, useState } from "react";
import { pedirDatos } from "../../helpers/pedirDatos";
import ItemList from "./itemList";
import pedirProductos from "./pedirProductos";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const category = useParams().category;

  useEffect(() => {
    pedirProductos().then((res) => {
      if (category) {
        setProductos(res.filter((prod) => prod.category === category));
      } else {
        setProductos(res);
      }
      setProductos(res);
    });
  }, [category]);

  return (
    <div>
      <ItemList productos={productos} />
    </div>
  );
};
