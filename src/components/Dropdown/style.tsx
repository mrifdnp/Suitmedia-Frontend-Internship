import styled from "@emotion/styled";
import { variant } from "styled-system";
import type {
  ComponentWraperProps,
  OverlayContainerProps,
  OverlayContentProps,
} from "./types";

const overlayContainerWidthVariant = (
  overlayWidth: "auto" | "fit-container" | string,
  width: number
) => {
  if (overlayWidth === "fit-container") {
    return `${width}px`;
  }
  if (overlayWidth === "auto") {
    return "fit-content";
  }
  return overlayWidth;
};

const placementVariant = variant({
  prop: "placement",
  variants: {
    "top-start": {
      paddingBottom: "2px",
    },
    top: {
      paddingBottom: "2px",
    },
    "top-end": {
      paddingBottom: "2px",
    },
    "bottom-start": {
      paddingTop: "2px",
    },
    bottom: {
      paddingTop: "2px",
    },
    "bottom-end": {
      paddingTop: "2px",
    },
    "left-start": {
      paddingRight: "2px",
    },
    left: {
      paddingRight: "2px",
    },
    "left-end": {
      paddingRight: "2px",
    },
    "right-start": {
      paddingLeft: "2px",
    },
    right: {
      paddingLeft: "6px",
    },
    "right-end": {
      paddingLeft: "6px",
    },
  },
});

export const OverlayContainer = styled.div<OverlayContainerProps>`
  width: ${({ overlayWidth, width }) => {
    return overlayContainerWidthVariant(overlayWidth, width);
  }};
  z-index: ${({ zIndex }) => zIndex};

  animation: fadeIn 0.3s;
  ${placementVariant}

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const OverlayContent = styled.div<OverlayContentProps>`
  background-color: white;
  box-shadow: 0px 8px 16px rgba(41, 41, 41, 0.08);
  border-radius: 10px;

  height: ${({ overlayHeight }) => overlayHeight};
  overflow-x: ${({ overlayHeight }) =>
    overlayHeight === "auto" ? "hidden" : "auto"};
  overflow-y: auto;
`;

export const ComponentWraper = styled.div<ComponentWraperProps>`
  cursor: pointer;
  width: ${({ fitContent }) => (fitContent ? "fit-content" : "auto")};
  ${placementVariant}
`;
