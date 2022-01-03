import React from "react";
import SideMenu from "./SideMenu";
import styled from "styled-components";
const SideBar = () => {
  const SideBarContainer = styled.div`
    width: 15%;
    border: solid red;
    display: flex;
    flex-direction: column;
  `;

  const menuList = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ];
  return (
    <SideBarContainer>
      <SideMenu menuList={menuList} />
    </SideBarContainer>
  );
};
export default SideBar;
