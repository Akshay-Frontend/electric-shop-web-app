import { IoCartOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { UseCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  // console.log(product);

  const { addToCart, cartItem } = UseCart();
  console.log(cartItem);

  return (
    <div className="border relative mx-auto border-gray-200 rounded cursor-pointer w-52 py-2 transition-all px-2 overflow-hidden">
      <img
        src={product.image}
        alt={product.title}
        className="bg-gray-100 aspect-square"
        onClick={() => navigate(`/products/${product.id}`)}
      />
      <h1 className="line-clamp-2 font-semibold"> {product.title} </h1>
      <p className="my-2 text-lg text-gray-800 font-bold"> ${product.price} </p>
      <button
        onClick={() => addToCart(product)}
        className="bg-red-500 px-3 py-2 text-lg rounded-md text-white w-full cursor-pointer  flex gap-1 items-center justify-center font-semibold mt-4"
      >
        {" "}
        <IoCartOutline className="w-6 h-6" /> Add To Cart{" "}
      </button>
    </div>
  );
};

export default ProductCard;
