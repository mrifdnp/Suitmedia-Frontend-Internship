"use client";

import Icon from "@/components/Icon";
import { ItemContainer } from "./styles";
import { useRouter } from "next/router";
import { MouseEvent } from "react";

type LabelPagination = "&laquo; Previous" | "Next &raquo;" | "..." | string;

interface ItemPaginationProps {
  isActive: boolean;
  label: LabelPagination;
  url: string | null;
}

const IconPagination = ({ children }: { children: LabelPagination }) => {
  switch (children) {
    case "&laquo; Previous":
      return <Icon name="chevron-left" color="#ff6800" />;
    case "Next &raquo;":
      return <Icon name="chevron-right" color="#ff6800" />;
    default:
      return <span>{children}</span>;
  }
};

export default function ItemPagination({
  isActive,
  label,
  url,
}: ItemPaginationProps) {
  const router = useRouter();

  const handleClick = (e: MouseEvent) => {
    if (!url) return;

    const urlObj = new URL(url);
    const pageParam = urlObj.searchParams.get("page[number]");
    if (pageParam) {
      router.push({
        pathname: router.pathname,
        query: {
          ...router.query,
          page: pageParam,
        },
      });
    }
  };

  return (
    <ItemContainer
      onClick={handleClick}
      className={`${
        isActive ? "bg-orange text-slate-100 font-medium" : ""
      } flex items-center text-xs md:text-base cursor-pointer justify-center p-2 aspect-square md:w-8 md:h-8 w-6 h-6 rounded-lg`}
    >
      <IconPagination>{label}</IconPagination>
    </ItemContainer>
  );
}
