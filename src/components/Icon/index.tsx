import React from "react";
import IcoMoon from "react-icomoon";
import selection from "./selection.json";

interface IconProps {
  name: string;
  color?: string;
  size?: number | string;
  className?: string;
}

function Icon({ name, color, size, className }: IconProps) {
  return (
    <span
      role="img"
      aria-label="environment"
      className="anticon anticon-environment"
    >
      <IcoMoon
        iconSet={selection}
        icon={name}
        color={color}
        size={size}
        className={`w-[14px] sm:w-[18px] md:w-[21px] lg:w-[24px] ${className}`}
      />
    </span>
  );
}

export default Icon;
