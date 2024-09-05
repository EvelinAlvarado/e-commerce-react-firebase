import {
  addDoc,
  collection,
  doc, //Function to get a reference to a collection in Firestore
  DocumentData,
  getDoc,
  getDocs, //Data type for generic documents in Firestore
  query, //Function to get documents from a collection
  QuerySnapshot,
  where, //Data type that represents the result of a query
} from "firebase/firestore";
import { ProductType } from "../types/ProductType";
import { db } from "../firebase/config"; //Import the Firestore instance configured in the config.ts file
import { OrderTypes } from "../types/OrderType";

// !Methods: getDocs, getDoc, addDoc
export const fetchProducts = async (): Promise<ProductType[]> => {
  try {
    //Get a reference to collection "products" ("db"(config-firebase), name of collection)
    const productRef = collection(db, "products");
    // Run the query to get the documents in the collection
    const querySnapshot: QuerySnapshot<DocumentData> = await getDocs(
      productRef
    );
    // console.log("Query Snapshot:", querySnapshot);
    //Extract data from documents and build an array of products
    const productsData: ProductType[] = querySnapshot.docs.map((doc) => {
      // console.log("Document Data:", doc.data()); // Document data without ID
      // console.log("Document id:", doc.id); // Document ID
      // Return an object with the structure of ProductType, including the ID
      return {
        id: doc.id, //Assigns the document ID as a string
        ...(doc.data() as Omit<ProductType, "id">), //Assert that the rest of the data corresponds to ProductType (without "id")
      };
    });
    console.log("Products Data:", productsData);

    return productsData;
  } catch (error) {
    console.error("Error loading products:", error);
    throw error;
  }
};

export const fetchProductsByCategory = async (
  category: string
): Promise<ProductType[]> => {
  try {
    //Get a reference to collection "products" ("db"(config-firebase), name of collection)
    const productRef = collection(db, "products");
    // Query to Filter by category
    const productQuery = query(
      productRef,
      where("category", "==", category.toLowerCase())
    );
    // Run the query to get the documents in the collection
    const querySnapshot: QuerySnapshot<DocumentData> = await getDocs(
      productQuery
    );
    //Extract data from documents and build an array of products
    const productsData: ProductType[] = querySnapshot.docs.map((doc) => ({
      // console.log("Document Data:", doc.data()); // Document data without ID
      // console.log("Document id:", doc.id); // Document ID
      // Return an object with the structure of ProductType, including the ID
      id: doc.id,
      ...(doc.data() as Omit<ProductType, "id">),
    }));
    return productsData;
  } catch (error) {
    console.error("Error loading products by category:", error);
    throw error;
  }
};

export const fetchItemById = async (
  id: string
): Promise<ProductType | null> => {
  try {
    //Get the reference to the document Firebase
    const itemRef = doc(db, "products", id);
    //console.log(itemRef);
    //Get the document Data
    const itemSnapshot = await getDoc(itemRef);
    // console.log(itemSnapshot);
    // console.log("id: ", itemSnapshot.id);
    // console.log("data: ", itemSnapshot.data);
    //Check if the document exists
    if (itemSnapshot.exists()) {
      //Return the product formatted as ProductType
      return {
        id: itemSnapshot.id,
        ...(itemSnapshot.data() as Omit<ProductType, "id">),
      };
    } else {
      console.log("Product not found");
      return null;
    }
  } catch (error) {
    console.error("Error fetching product by id:", error);
    throw error;
  }
};

//Function to save a order in Firestore
export const postOrderToFirestore = async (order: OrderTypes) => {
  try {
    //The Collection in Firebase where it will store the orders
    const orderRef = collection(db, "orders");
    const docRef = await addDoc(orderRef, order);
    console.log("Order written with ID: ", docRef.id);
    return docRef;
    // return docRef.id;
  } catch (error) {
    console.error("Error adding document: ", error);
  }
};
