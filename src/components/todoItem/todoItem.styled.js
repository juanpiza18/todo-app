import styled from "styled-components";
import { templateTheme } from "../../utils/theme";

export const TextContent = styled.p`
  flex: 1;
  color: ${(props) =>
    props.theme.name === "dark"
      ? templateTheme.colors.gray[400]
      : templateTheme.colors.blue[200]};
  &.completed {
    color: ${(props) =>
      props.theme.name === "dark"
        ? templateTheme.colors.gray[600]
        : templateTheme.colors.gray[500]};
    text-decoration: line-through;
  }
`;

export const CheckboxBoxContainer = styled.div`
  border-radius: 50%;
  border: ${(props) => props.theme.border};
  padding: 0.1rem;
  color: inherit;
  &:hover {
    background: ${templateTheme.gradients.blueToPurple};
  }
`;

export const CheckboxInput = styled.input`
  display: none;
`;

export const Checkbox = styled.span`
  display: flex;
  width: 2.133rem;
  height: 2.133rem;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color:${(props) => props.theme.backgroundColor};
  &.completed {
    background-image:${templateTheme.gradients.blueToPurple};
`;
