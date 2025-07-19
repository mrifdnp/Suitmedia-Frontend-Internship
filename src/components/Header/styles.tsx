import styled from "@emotion/styled";
import { LinkButtonProps } from "./LinkButton";
import { PageState } from ".";

export const LinkButtonContainer = styled.div<{
  state: PageState;
  type: PageState;
}>`
  position: relative;
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    width: 40px;
    border-radius: 5px;
    opacity: ${({ state, type }) => (state == type ? 1 : 0)};
    height: 4px;
    background-color: white;
    bottom: -10px;
    left: 0px;
    margin: auto;
    right: 0px;
    transition-property: all;
    transition-duration: 300ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export const HeaderContainer = styled.div<{ state: boolean; isTop: boolean }>`
  top: ${({ state, isTop }) => (state || isTop ? "0px" : "-100px")};
  background-color: rgb(255, 104, 0, ${({ isTop }) => (isTop ? "1" : ".25")});
`;

export const NavContainer = styled.div<{ active: boolean }>`
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  right: 0;
  top: ${({ active }) => (active ? "0vh" : "-100vh")};
  background-color: #ff680080;
`;
