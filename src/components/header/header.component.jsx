import React from "react";
import SwitchTheme from "../switchTheme/switchTheme.component";
import { HeaderContainer, HeaderTitle } from "./header.styled";

const Header = () => (
  <HeaderContainer>
    <HeaderTitle>Todo</HeaderTitle>
    <SwitchTheme />
  </HeaderContainer>
);

export default Header;
