import { useEffect, useState } from "react";
// import { fetchItemId } from "../helpers/fetchData";
import { useParams } from "react-router-dom";
import { ProductType } from "../types/ProductType";
import { ItemCount } from "./ItemCount";
import { fetchItemById } from "../helpers/firebaseService";

export const ItemDetailContainer = (): JSX.Element => {
  const [item, setItem] = useState<ProductType | null>(null);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    //****** Using db.json
    // Definir una función async dentro del useEffect
    /* const fetchItem = async () => {
      if (id) {
        const parsedId = Number(id); // Asegurarse de convertir el id a número si es necesario
        const response = await fetchItemId(parsedId);
        setItem(response); // Actualizar el estado con la respuesta
      }
    }; */

    //*****FIREBASE
    const fetchItem = async () => {
      try {
        //check if an id is available
        if (id) {
          const itemData = await fetchItemById(id);
          setItem(itemData);
        }
      } catch (error) {
        console.error("Error showing product details:", error);
      }
    };
    fetchItem();
  }, [id]);
  console.log(item);

  if (!item) {
    return <div>Loading...</div>; // Mostrar un estado de carga mientras se obtiene el producto
  }

  return (
    <div className="w-full flex justify-center items-center">
      <div className="max-w-7xl flex flex-row gap-10 h-full">
        <img
          className="rounded-2xl w-[400px]"
          src={item.image}
          alt={item.title}
        />
        <div className="flex flex-col h-full justify-between">
          <p className="font-bold text-[#233a5e] text-4xl">{item.title}</p>
          <div className="flex flex-col gap-2">
            <p className="text-[#233a5e]">{item.description}</p>
            <p className="text-[#233a5e]">Category: {item.category}</p>
            <span className="text-[#233a5e]">Price ${item.price}</span>
            <ItemCount stock={item.stock} product={item} />
          </div>
        </div>
      </div>
    </div>
  );
};
