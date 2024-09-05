import { FormValuesTypes } from "./FormValuesTypes";
import { ProductType } from "./ProductType";

export interface OrderTypes {
  client: FormValuesTypes;
  products: ProductType[];
  totalPrice: number;
}
