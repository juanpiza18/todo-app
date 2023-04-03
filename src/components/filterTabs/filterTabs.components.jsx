import React, { useContext } from "react";
import TodoContext from "../../context/todoContext";
import { ButtonText } from "../../styled/buttons.styled";
import { ButtonGroup } from "../../styled/wrapper.styled";

const FilterTabs = ({ tabs }) => {
  const { filter } = useContext(TodoContext);
  return (
    <ButtonGroup>
      {tabs.map(({ text, callback }, index) => (
        <ButtonText
          className={filter === text ? "active" : ""}
          key={index}
          onClick={callback}
        >
          {text}
        </ButtonText>
      ))}
    </ButtonGroup>
  );
};

export default FilterTabs;
