import styled from "styled-components";

export const ImageContainer = styled.div`
  background-color: ${(props) => props.theme.bodyBackground.primary};
  background-image: url(${(props) => props.theme.backgroundImageMobile});
  color: ${(props) => props.theme.variant.primary};

  width: 100%;
  padding: 5rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-repeat: no-repeat;
  background-position: top center;
  background-size: contain;
  min-height: 100vh;

  @media (min-width: 500px) {
    background-image: url(${(props) => props.theme.backgroundImageDesktop});
  }
`;

export const ContentContainer = styled.div`
  padding: 0 2rem;
  @media (min-width: 500px) {
    padding: 0;
  }
`;
