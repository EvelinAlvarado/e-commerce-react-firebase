import db from "../data/db.json";
import { ProductType } from "../types/productType";

export const fetchingData = async (): Promise<ProductType[]> => {
  try {
    const data: ProductType[] = db;
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw new Error("Error fetching data");
  }
};

export const fetchItemId = async (id: number): Promise<ProductType> => {
  try {
    const item = await db.find((card) => card.id === id);
    if (!item) {
      throw new Error(`Item with id ${id} not found`);
    }
    return item;
  } catch (error) {
    console.error("Error item id:", error);
    throw new Error("Error fetching item id");
  }
};
