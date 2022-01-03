import React from "react";
import HeaderMenu from "../components/HeaderMenu";

const Header = () => {
  const menuList = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
    // {
    //   label: "검색",
    //   href: "/search",
    // },
    {
      label: "Contact",
      href: "/contact",
    },
    // {
    //   label: "My",
    //   href: "/my",
    // },
  ];

  return (
    <div className="HeaderContainer">
      <div className="Logo">LOGO</div>
      <HeaderMenu menuList={menuList} />
    </div>
  );
};

export default Header;
