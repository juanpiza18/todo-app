import { templateTheme } from "../../utils/theme";
import styled from "styled-components";

export const HeaderTitle = styled.h1`
  font-size: 1.8rem;
  text-transform: uppercase;
  letter-spacing: 7px;
  font-weight: 700;
  color: ${templateTheme.colors.gray[100]};
`;

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
  @media (min-width: 500px) {
    margin-bottom: 3rem;
  }
`;
