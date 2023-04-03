import React, { useContext } from "react";
import Sun from "../../assets/images/icon-sun.svg";
import Moon from "../../assets/images/icon-moon.svg";
import TodoContext from "../../context/todoContext";
import { ButtonIcon } from "../../styled/buttons.styled";

const SwitchTheme = () => {
  const { themeLight, changeTheme } = useContext(TodoContext);
  const themeIcon = themeLight ? Moon : Sun;
  return (
    <ButtonIcon onClick={changeTheme}>
      <img src={themeIcon} alt="Icon" />
    </ButtonIcon>
  );
};

export default SwitchTheme;
