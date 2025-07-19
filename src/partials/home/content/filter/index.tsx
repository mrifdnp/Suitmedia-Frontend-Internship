import Select from "@/components/Select";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { useAppContext } from "@/context/AppContext";

export default function ContentFilter() {
  const [data] = useAppContext();
  const searchParams = useSearchParams();
  const router = useRouter();
  const size = searchParams.get("size") ?? 10;
  const sort = searchParams.get("sort") ?? "newest";

  return (
    <div className="flex md:flex-row flex-col justify-between items-center mb-6 text-xs sm:text-sm md:text-base gap-y-1">
      <div className="text-xs sm:text-sm md:text-base grow text-start w-full md:w-fit">
        {!data?.data ? (
          <div>No Data Showed</div>
        ) : (
          <div>
            Showing {data?.meta.from} - {data?.meta.to} of {data?.meta.total}
          </div>
        )}
      </div>
      <div className="flex  sm:flex-row flex-col w-full md:w-fit gap-x-4 gap-y-1">
        <div className="flex items-center gap-1 grow">
          <div className="">Show per page:</div>
          <div className="grow md:grow-0 md:w-28 lg:w-40">
            <Select
              width="100%"
              value={Number(size)}
              onChange={(e) => {
                router.push({
                  pathname: router.pathname,
                  query: { ...router.query, size: e.toString() },
                });
              }}
              options={[
                { label: "10", value: 10 },
                { label: "20", value: 20 },
                { label: "50", value: 50 },
              ]}
            />
          </div>
        </div>
        <div className="flex items-center gap-1 grow">
          <div className="text-xs sm:text-sm md:text-base">Sort by:</div>
          <div className="grow md:grow-0 md:w-28 lg:w-40">
            <Select
              width="100%"
              value={sort}
              onChange={(e) => {
                router.push({
                  pathname: router.pathname,
                  query: { ...router.query, sort: e.toString() },
                });
              }}
              options={[
                { label: "Newest", value: "newest" },
                { label: "Oldest", value: "oldest" },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
