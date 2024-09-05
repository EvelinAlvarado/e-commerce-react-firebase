import { Link } from "react-router-dom";

export const HomePage = (): JSX.Element => {
  const categories = [
    {
      name: "T-Shirts",
      image: "https://via.placeholder.com/300x200",
      route: "/products/t-shirts",
    },
    {
      name: "Pants",
      image: "https://via.placeholder.com/300x200",
      route: "/products/pants",
    },
    {
      name: "Socks",
      image: "https://via.placeholder.com/300x200",
      route: "/products/socks",
    },
    {
      name: "Hoodies",
      image: "https://via.placeholder.com/300x200",
      route: "/products/hoodies",
    },
  ];

  return (
    <div className="w-full h-full flex flex-col items-center">
      {/* Hero Section */}
      <div
        className="w-full h-96 bg-cover bg-center mb-8 flex items-center justify-center"
        style={{
          backgroundImage: "url('https://via.placeholder.com/1600x400')",
        }}
      >
        <h1 className="text-4xl text-white font-bold bg-black bg-opacity-50 px-4 py-2 rounded">
          Welcome to Our Clothing Store
        </h1>
      </div>

      {/* Categories Section */}
      <div className="max-w-7xl w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
        {categories.map((category, index) => (
          <Link key={index} to={category.route}>
            <div className="flex flex-col items-center justify-center text-center rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{category.name}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
