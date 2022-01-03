import React from "react";
import styled from "styled-components";

const SideMenu = ({ menuList }) => {
  const MenuButton = styled.button`
    margin-top: 40px;
    height: 80px;
  `;
  return (
    <>
      {menuList.map((menu) => (
        <MenuButton key={menu.label}>{menu.label}</MenuButton>
      ))}
    </>
  );
};

export default SideMenu;
