import { Link } from "react-router-dom";

export const HomePage = (): JSX.Element => {
  const categories = [
    {
      name: "T-Shirts",
      image:
        "https://images.unsplash.com/photo-1716951848908-8907bb6c655b?q=80&w=1362&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      route: "/products/t-shirts",
    },
    {
      name: "Pants",
      image:
        "https://plus.unsplash.com/premium_photo-1674828601362-afb73c907ebe?q=80&w=1353&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      route: "/products/pants",
    },
    {
      name: "Socks",
      image:
        "https://plus.unsplash.com/premium_photo-1723867474657-d4caa7043aaa?q=80&w=1438&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      route: "/products/socks",
    },
    {
      name: "Hoodies",
      image:
        "https://plus.unsplash.com/premium_photo-1673125510222-1a51e3a8ccb0?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      route: "/products/hoodies",
    },
  ];

  return (
    <div className="w-full h-full flex flex-col items-center">
      {/* Hero Section */}
      <div
        className="w-full h-96 bg-cover bg-center mb-8 flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <h1 className="text-3xl md:text-4xl text-white text-center font-bold bg-black bg-opacity-50 px-4 py-2 rounded">
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
