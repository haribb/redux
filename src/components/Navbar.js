import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const [show, setshow] = useState(false);
  const location = useLocation();
 function shownav(){
  if (
    location.pathname === "/home" ||
    location.pathname === "/post" ||
    location.pathname === "/photos"
  ) {
    return setshow(true);
  } else {
   return setshow(false);
  }
 }
//  shownav()
  useEffect(shownav);

  return (
    <>
      <nav className="fixed w-full p-3 bg-slate-100 ">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className=" sm:text-sm md:text-2xl ">React Js</h1>

          <div className="flex items-center">
            <nav className={show ? "active" : "navbar"}>
              <NavLink to="/home" className="font-normal p-2 font-medium ">
                Home
              </NavLink>
              <NavLink to="/post" className="font-normal p-2 font-medium">
                Post
              </NavLink>
              <NavLink to="/photos" className="font-normal p-2 font-medium">
                Photos
              </NavLink>
            </nav>

            <NavLink
              to="/"
              className="text-white font-medium px-3 py-1 bg-indigo-500 hover:bg-indigo-600 rounded "
            >
              {show ? "logout" : "Login"}
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
