import styled from "@emotion/styled";
import type { Theme } from "@emotion/react";
import { variant } from "styled-system";

export const Container = styled.div`
  border-radius: 10px;
  border: 1.5px solid #55565a;
  overflow: hidden;
`;

interface MenuItemProps {
  active?: boolean;
}

const activeVariant = (theme: Theme) =>
  variant({
    prop: "active",
    variants: {
      true: {
        backgroundColor: "#ff680080",
        color: "#1e293b",
      },
    },
  });

export const MenuItem = styled.div<MenuItemProps>`
  padding: 4px 18px;
  color: black;
  ${({ theme }) => activeVariant(theme)}

  &:hover {
    ${({ active, theme }) => !active && `background-color: #ff680099;`}
    cursor: pointer;
    font-weight: 600;
  }

  transition: ease-in-out 0.15s all;
`;
