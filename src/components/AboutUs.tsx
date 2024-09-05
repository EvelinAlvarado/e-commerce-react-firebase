import { Link } from "react-router-dom";

export const AboutUs = (): JSX.Element => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto my-10">
      <h2 className="text-4xl font-bold text-center text-[#3b375e] mb-6">
        About Us
      </h2>
      <p className="text-lg text-[#3b375e] text-center mb-4">
        Welcome to FashionHub, your number one source for all things fashion.
        We're dedicated to providing you with the latest trends, with a focus on
        quality, style, and sustainability.
      </p>
      <p className="text-lg text-[#3b375e] text-center mb-4">
        Founded in 2020, FashionHub has come a long way from its beginnings in a
        small home office. We now serve customers all over the world and are
        thrilled to be a part of the eco-friendly wing of the fashion industry.
      </p>
      <p className="text-lg text-[#3b375e] text-center">
        We hope you enjoy our products as much as we enjoy offering them to you.
        If you have any questions or comments, please don't hesitate to contact
        us.
      </p>
      <div className="text-center mt-6">
        <Link
          to="/contact"
          className="bg-[#ffb603] text-white font-bold hover:bg-yellow-600 transition duration-300 px-6 py-2 rounded-xl"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};
