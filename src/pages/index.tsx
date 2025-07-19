import Loading from "@/components/Loading";
import { BaseResponse, SuccessResponse } from "@/types/Response";
import { IdeaResponse } from "@/types/response/IdeaResponse";
import { getIdea } from "@/types/response/Ideas";
import { convertParam } from "@/utils/convertParams";
import axios, { AxiosResponse } from "axios";
import { GetServerSideProps, NextPage } from "next";
import dynamic from "next/dynamic";
import { useParams } from "next/navigation";
import { toast } from "react-toastify";

const HomePage: NextPage = dynamic(() => import("@/partials/home"), {
  loading: () => <Loading />,
});

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { page, size, sort: querySort } = context.query;

  const pageNumber = convertParam(page) ?? "1";
  const pageSize = convertParam(size) ?? "10";

  const sort: "published_at" | "-published_at" | undefined =
    querySort === "newest"
      ? "-published_at"
      : querySort === "oldest"
      ? "published_at"
      : undefined;

  console.log(pageSize);

  try {
    const res = await axios.get<BaseResponse<IdeaResponse>>(
      `http://${context.req.headers.host}/${getIdea({
        pageNumber,
        pageSize,
        sort,
        append: ["small_image", "medium_image"],
      })}`
    );
    toast.success("asdasd");

    return {
      props: {
        data: res.data,
      },
    };
  } catch (err) {
    console.log("error", err);
  }

  return {
    props: {
      error: "Too Many Attempts",
      data: null,
    },
  };
};

export default HomePage;
