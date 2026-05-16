
import { IoCartOutline } from "react-icons/io5";
import "./NavBar.css";
const NavBar = () => {
 
  return (
        

<div className="navbar bg-base-100 shadow-sm w-10/12 mx-auto py-3 my-3">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-semibold text-[#101727] text-[16px]">
        <li><a href='#'>Products</a></li>
        <li><a href='#'>Features</a></li>
        <li><a href='#'>Pricing</a></li>
        <li><a href='#'>Testimonials</a></li>
        <li><a href='#'>FAQ</a></li>
        
      </ul>
    </div>
    <a className="text-3xl font-bold bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">DigiTools</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 font-semibold text-[#101727] text-[16px]">
        <li><a href='#'>Products</a></li>
        <li><a href='#'>Features</a></li>
        <li><a href='#'>Pricing</a></li>
        <li><a href='#'>Testimonials</a></li>
        <li><a href='#'>FAQ</a></li>
    </ul>
  </div>
  <div className="navbar-end flex gap-3">
   <p className='semibold text-[#101727]'><a href='#'><IoCartOutline /></a></p>
   <p><a href='#'>Login</a></p>
    <p><a className="btn rounded-4xl px-5 bg-linear-to-r from-[#4F39F6] to-[#9514FA]
9514FA] text-white">Get Started</a></p>
  </div>
</div>



    );
};

export default NavBar;