import { useEffect, useState } from "react";
// import { fetchingData } from "../helpers/fetchData";
import { ProductType } from "../types/ProductType.ts";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";
import {
  fetchProducts,
  fetchProductsByCategory,
} from "../helpers/firebaseService.ts";

export const ItemListContainer = (): JSX.Element => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const { category } = useParams<{ category?: string }>();

  useEffect(() => {
    //****** Using db.json
    /* const fetchProducts = async () => {
      try {
        const data = await fetchingData();
        console.log(data);
        setProducts(data);
      } catch (error) {
        console.error("Error loading products:", error);
        throw new Error("Error fetching data in a component");
      }
    };
    fetchProducts(); */

    //*****FIREBASE
    const loadProducts = async () => {
      try {
        let productsData: ProductType[];
        if (category) {
          productsData = await fetchProductsByCategory(category);
        } else {
          productsData = await fetchProducts();
        }
        setProducts(productsData);
      } catch (error) {
        console.error("Error loading products:", error);
      }
    };
    loadProducts();
  }, [category]);

  return (
    <div className="w-full flex justify-center items-center mb-9 h-full overflow-auto relative">
      <div className="max-w-7xl flex flex-col absolute top-0">
        <div>
          <ItemList products={products} />
        </div>
      </div>
    </div>
  );
};
