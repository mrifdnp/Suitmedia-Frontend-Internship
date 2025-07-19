import { css } from "@emotion/react";
import styled from "@emotion/styled";

type ContainerProps = {
  width: string;
};

export const Container = styled.div<ContainerProps>`
  padding: 4px 10px;
  width: ${({ width }) => width};
  background-color: white;
  border-radius: 16px;
  border: 2px solid #64748b;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
