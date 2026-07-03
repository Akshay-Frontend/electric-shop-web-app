import { UserButton, useUser } from "@clerk/clerk-react";
import { Info, Phone, ShoppingBag } from "lucide-react";
import { FaHome, FaUser, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const ResponsiveMenu = ({ openNav, setOpenNav }) => {
  const { user } = useUser();

  return (
    <>
      {openNav && (
        <div
          onClick={() => setOpenNav(false)}
          className="fixed inset-0 bg-black/40 z-10"
        />
      )}

      <div
        className={`fixed top-0 left-0 z-20 h-screen w-[80%] max-w-xs bg-gray-500 px-8 py-7 pb-7 shadow-lg transition-transform duration-300 ${
          openNav ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div>
          <div className="flex items-center justify-start gap-3 ">
            {user ? <UserButton size={50} /> : <FaUser size={50} />}
            <div>
              <h1> Hello , {user?.fullName} </h1>
              <h1 className="text-sm text-slate-500 "> Premium User </h1>
            </div>
          </div>
          <hr className="mt-3 text-gray-600" />
          <nav className="my-4">
            <ul className="flex flex-col gap-4 text-xl font-semibold">
              <Link
                to="/"
                onClick={() => setOpenNav(false)}
                className="flex items-center gap-3 rounded-xl bg-red-50 px-4 py-3 text-gray-800 transition hover:bg-red-100"
              >
                <FaHome className="h-6 w-6 text-red-500" />
                <span className="font-semibold">Home</span>
              </Link>

              <Link
                to="/products"
                onClick={() => setOpenNav(false)}
                className="flex items-center gap-3 rounded-xl bg-red-50 px-4 py-3 text-gray-800 transition hover:bg-red-100"
              >
                <ShoppingBag className="h-6 w-6 text-red-500" />
                <span className="font-semibold">Products</span>
              </Link>
              <Link
                to="/about"
                onClick={() => setOpenNav(false)}
                className="flex items-center gap-3 rounded-xl bg-red-50 px-4 py-3 text-gray-800 transition hover:bg-red-100"
              >
                <Info className="h-6 w-6 text-red-500" />
                <span className="font-semibold">About</span>
              </Link>

              <Link
                to="/contact"
                onClick={() => setOpenNav(false)}
                className="flex items-center gap-3 rounded-xl bg-red-50 px-4 py-3 text-gray-800 transition hover:bg-red-100"
              >
                <Phone className="h-6 w-6 text-red-500" />
                <span className="font-semibold">About</span>
              </Link>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default ResponsiveMenu;
