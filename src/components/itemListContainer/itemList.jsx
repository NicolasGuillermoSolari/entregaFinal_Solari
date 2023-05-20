import React from "react";
import Item from "./item";

const ItemList = ({ productos }) => {
  return (
    <div>
      <h2>Monedas</h2>
      {productos.length > 0 &&
        productos.map((producto) => {
          return (
            <div>
              <Item key={producto.id} producto={producto} />
            </div>
          );
        })}
    </div>
  );
};

export default ItemList;
