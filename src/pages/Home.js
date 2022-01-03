import React from "react";
import SideBar from "../components/SideBar";
import styled from "styled-components";

const Home = () => {
  console.log("hHOME");

  const SideBarContainer = styled.div`
    display: flex;
    flex-direction: row;
    border: solid blue;
    height: 92vh;
  `;
  const HomeContent = styled.div`
    border: solid orange;
    width: 100%;
  `;

  return (
    <SideBarContainer>
      <SideBar />
      <HomeContent>HOME RETURN~!</HomeContent>
    </SideBarContainer>
  );
};

export default Home;
