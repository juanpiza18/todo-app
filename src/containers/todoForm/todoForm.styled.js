import styled from "styled-components";
import { templateTheme } from "../../utils/theme";

export const FormControl = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  border-radius: 0.5rem;
  padding: 2.4rem;
  margin-bottom: 2rem;
`;

export const TodoInput = styled.input`
  border: none;
  font-size: 1.2rem;
  font-weight: 400;
  background-color: transparent;
  outline: none;
  color: ${(props) =>
    props.theme.name === "dark"
      ? templateTheme.colors.gray[400]
      : templateTheme.colors.blue[200]};
  width: 100%;
  &::placeholder {
    color: ${(props) =>
      props.theme.name === "dark"
        ? templateTheme.colors.gray[600]
        : templateTheme.colors.gray[500]};
  }
`;
