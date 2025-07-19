"use client";

import { useAppContext } from "@/context/AppContext";
import { useMemo } from "react";
import ItemPagination from "./item";

export default function HomePagination() {
  const [data] = useAppContext();
  const meta = useMemo(() => {
    return data?.meta;
  }, [data]);

  if (!meta?.links?.length) return null;

  return (
    <div className="mt-8 mb-8 flex flex-wrap items-center gap-x-2 justify-center">
      {meta.links.map((e) => (
        <ItemPagination
          key={e.label}
          label={e.label}
       url={e.url ?? null}
          isActive={e.active}
        />
      ))}
    </div>
  );
}
