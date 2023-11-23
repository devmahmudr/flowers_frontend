import { NavLink } from "react-router-dom";
import logo from "../../assets/icons/logo.svg";
import user from "../../assets/icons/user.svg";
import cart_shop from "../../assets/icons/cart-shopping.svg";

function HeaderComponent() {
  return (
    <header className="flex justify-between items-center bg-white px-[120px] py-[40px]">
      <div className="header__left">
        <img src={logo} alt="siteLogo" />
      </div>
      <div className="header__center">
        <nav className="gap-x-[23px] flex">
          <NavLink to={"/"} className={"text-[20px] text-black px-1 py-1 hover:text-[#FF8F52]"}>Home</NavLink>
          <NavLink to={"/shop"} className={"text-[20px] text-black px-1 py-1 hover:text-[#FF8F52]"}>Shop</NavLink>
          <NavLink to={"/blog"} className={"text-[20px] text-black px-1 py-1 hover:text-[#FF8F52]"}>Blog</NavLink>
          <NavLink to={"/about"} className={"text-[20px] text-black px-1 py-1 hover:text-[#FF8F52]"}>About</NavLink>
        </nav>
      </div>
      <div className="header__right flex gap-x-5 ">
        <img src={user} alt="user" className="cursor-pointer"/>
        <img src={cart_shop} alt="cart" className="cursor-pointer"/>
      </div>
    </header>
  );
}

export default HeaderComponent;
