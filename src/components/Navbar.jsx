import { Link, NavLink } from "react-router-dom";
import { MapPin, Menu, X } from "lucide-react";
import { FaCaretDown } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { CgCloseR } from "react-icons/cg";
import { useState } from "react";
import { MdMenu } from "react-icons/md";
import { HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "../components/ResponsiveMenu";
import { UseCart } from "../context/CartContext";

const Navbar = ({ location, getLocation, openDropdown, setOpenDropdown }) => {
  const { cartItem } = UseCart();
  const [openNav, setOpenNav] = useState(false);

  const toggleDropdown = () => {
    setOpenDropdown(!openDropdown);
  };

  //const location = false ;
  return (
    <div className="bg-white w-full py-4 shadow-2xl px-5 ">
      <div className="max-w-6xl w-full mx-auto flex justify-between items-center ">
        {/* logo section  */}
        <div className="flex gap-12 items-center ">
          <Link to={"/"}>
            <h1 className="font-bold text-3xl">
              <span className="text-red-600 font-bold font-serif">Z</span>
              aptro
            </h1>
          </Link>
          <div className=" md:flex gap-1 cursor-pointer text-gray-700 items-center  hidden">
            <MapPin className="text-red-500 " />
            <span className="font-semibold">
              {location ? (
                <div className="-space-y-2 text-gray-600 font-bold">
                  <p> {location.city} </p>
                  <p> {location.state} </p>
                </div>
              ) : (
                "Add Address"
              )}
            </span>
            <FaCaretDown onClick={toggleDropdown} />
          </div>
          {openDropdown ? (
            <div className="w-62 h-max shadow-2xl z-50 bg-white fixed top-17 left-60 border-3 p-5 border-gray-200 rounded-md">
              <h1 className=" font-semibold mb-3 text-xl flex justify-between ">
                Change Location
                <span
                  onClick={toggleDropdown}
                  className="cursor-pointer flex text-red-600 rounded "
                >
                  {" "}
                  <CgCloseR />
                </span>
              </h1>
              <button
                onClick={getLocation}
                className="bg-red-500 text-white px-3 py-1 rounded-2xl font-semibold cursor-pointer hover:bg-red-400"
              >
                Detect my location
              </button>
            </div>
          ) : null}
        </div>

        <nav className="flex gap-7 items-center ">
          <ul className=" md:flex  gap-6 items-center text-xl font-semibold hidden ">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `${
                  isActive
                    ? "border-b-4 transition-all border-red-500"
                    : "text-black"
                } cursor-pointer`
              }
            >
              <li> Home </li>
            </NavLink>
            <NavLink
              to={"/products"}
              className={({ isActive }) =>
                `${
                  isActive
                    ? "border-b-4 transition-all border-red-500"
                    : "text-black"
                } cursor-pointer`
              }
            >
              <li>Products</li>
            </NavLink>
            <NavLink
              to={"/about"}
              className={({ isActive }) =>
                `${
                  isActive
                    ? "border-b-4 transition-all border-red-500"
                    : "text-black"
                } cursor-pointer`
              }
            >
              <li>About</li>
            </NavLink>
            <NavLink
              to={"/contact"}
              className={({ isActive }) =>
                `${
                  isActive
                    ? "border-b-4 transition-all border-red-500"
                    : "text-black"
                } cursor-pointer`
              }
            >
              <li>Contact</li>
            </NavLink>
          </ul>
          <Link to={"/cart"} className="relative">
            <IoCartOutline className="h-7 w-7" />
            <span className="bg-red-500 px-2 rounded-full absolute -top-3 -right-3 text-white">
              {cartItem.length}
            </span>
          </Link>

          <div className="hidden md:block w-full">
            <SignedOut>
              <SignInButton className="bg-red-500 text-black font-bold  cursor-pointer px-4 py-2 text-xs rounded " />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
          <button
            onClick={() => setOpenNav(!openNav)}
            className="md:hidden rounded p-2 transition hover:bg-gray-100"
          >
            {openNav ? (
              <X className="h-7 w-7 text-gray-800" />
            ) : (
              <Menu className="h-7 w-7 text-gray-800" />
            )}
          </button>
        </nav>
      </div>
      <ResponsiveMenu openNav={openNav} setOpenNav={setOpenNav} />
    </div>
  );
};

export default Navbar;
