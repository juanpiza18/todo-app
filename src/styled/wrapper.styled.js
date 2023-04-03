import styled from "styled-components";
import { templateTheme } from "../utils/theme";
import { getStylesDependingOnTheme } from "./utils";

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  gap: 4rem;
  font-size: 1rem;
  & span {
    color: ${(props) => props.theme.variant.quaternary};
    font-weight: 400;
  }
`;

export const FilterDesktopWrapper = styled.div`
  display: none;
  @media (min-width: 500px) {
    display: grid;
  }
`;

export const FilterMobileWrapper = styled.div`
  margin-top: 2rem;
  display: block;
  background-color: ${(props) => props.theme.backgroundColor};
  border-radius: 1rem;
  ${getStylesDependingOnTheme({
    light: {
      "box-shadow": `-1px 5px 20px 10px ${templateTheme.shadows[100]}`,
    },
  })}
  padding: 2rem;
  @media (min-width: 500px) {
    display: none;
  }
`;

export const ButtonGroup = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
`;

export const TodoListSection = styled.section`
  background-color: ${(props) => props.theme.backgroundColor};
  border-radius: 1rem;
  ${getStylesDependingOnTheme({
    light: {
      "box-shadow": `-1px 5px 20px 10px ${templateTheme.shadows[100]}`,
    },
  })}

  & ul {
    list-style: none;
    & li {
      display: flex;
      align-items: center;
      padding: 2rem;
      gap: 2rem;
      border-bottom: ${(props) => props.theme.border};
    }
  }
`;
