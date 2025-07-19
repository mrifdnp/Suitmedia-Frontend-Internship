import Link from "next/link";
import React from "react";
import tw from "twin.macro";

interface LinkButtonProps {
  type: string;
  state: string;
  onUpdate: (type: any) => void;
  children: React.ReactNode;
}

const LinkButton: React.FC<LinkButtonProps> = ({ type, state, onUpdate, children }) => {
  const isActive = state === type;

  return (
    <Link href={`/${type}`}>
      <div
        onClick={() => onUpdate(type)}
        className={`cursor-pointer px-3 py-2 text-sm font-medium transition duration-300 ${
          isActive ? "text-white border-b-2 border-white" : "text-gray-300 hover:text-white"
        }`}
      >
        {children}
      </div>
    </Link>
  );
};

export default LinkButton;
