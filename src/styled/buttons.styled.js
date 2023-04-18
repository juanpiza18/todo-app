import styled from "styled-components";
import { templateTheme } from "../utils/theme";

export const ButtonIcon = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: transparent;
  align-self: flex-end;
  cursor: pointer;
`;

export const ButtonText = styled.button`
  display: flex;
  border: none;
  border-radius: 50%;
  background-color: transparent;
  justify-content: center;
  font-size: 1rem;
  color: ${(props) => props.theme.variant.quaternary};
  cursor: pointer;
  transition: all 0.1s ease-in;
  font-family: "Josefin Sans", sans-serif;
  &.active {
    color: ${templateTheme.colors.blue[0]};
    font-weight: 700;
  }
  &:hover {
    font-weight: 700;
    color: ${(props) => {
      return props.theme.variant.secondary;
    }};
  }
  @media (min-width: 500px) {
    width: 120px;
  }
`;
