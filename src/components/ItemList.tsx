import { Link } from "react-router-dom";
import { ProductType } from "../types/ProductType.ts";

interface ItemCardProps {
  products: ProductType[];
}

export const ItemList = ({ products }: ItemCardProps): JSX.Element => {
  // const [productsSelected, setProductsSelected] = useState<ProductType[]>([]);
  // const { category } = useParams<{ category?: string }>();
  // useEffect(() => {
  //   //****** Using db.json
  //   /* if (category) {
  //     const categorySelected = products.filter(
  //       (product) => product.category.toLowerCase() === category.toLowerCase()
  //     );
  //     setProductsSelected(categorySelected);
  //   } else {
  //     setProductsSelected(products);
  //   } */

  // }, [category, products]);
  // console.log(productsSelected);
  return (
    <div className="flex flex-row flex-wrap justify-between gap-y-5">
      {products.map((card) => (
        <div
          key={card.id}
          className="flex flex-col items-center justify-center text-center rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
        >
          <img
            className="w-full h-48 object-cover rounded-t-lg"
            src={card.image}
            alt={card.title}
          />
          <div className="flex flex-col h-full justify-between p-4 gap-2 items-center">
            <p className="font-bold text-[#233a5e]">{card.title}</p>
            <span className="text-[#233a5e]">Price ${card.price}</span>
            <p className="text-[#233a5e]">Category: {card.category}</p>
            <Link
              className="p-2 bg-[#ffb603] text-white font-bold hover:bg-yellow-600 transition duration-300 w-fit rounded-xl"
              to={`/item/${card.id}`}
            >
              View more
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};
