import styled from "styled-components";

export const DraggableLi = styled.li`
  display: flex;
  align-items: center;
  padding: 2rem;
  gap: 2rem;
  border-bottom: ${(props) => props.theme.border};
  cursor: move;
`;
