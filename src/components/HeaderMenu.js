import React from "react";

const HeaderMenu = ({ menuList }) => {
  return (
    <>
      <div className="HeaderMenuContainer">
        {menuList.map((menu) => (
          <button key={menu.label}>{menu.label}</button>
        ))}
      </div>
    </>
  );
};

export default HeaderMenu;
