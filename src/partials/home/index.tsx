import axios from "axios";
import { useEffect } from "react";
import HomeBanner from "./banner";
import HomeContent from "./content";
import HomePagination from "./pagination";
import Header from "@/components/Header";
import { BaseResponse, SuccessResponse } from "@/types/Response";
import { IdeaResponse } from "@/types/response/IdeaResponse";
import { useAppContext } from "@/context/AppContext";
import { toast } from "react-toastify";

const HomePage = ({
  data,
  error,
}: {
  data?: BaseResponse<IdeaResponse>;
  error?: string;
}) => {
  const [state, setState] = useAppContext();

  useEffect(() => {
    if (data != null) setState(data);
  }, [data]);

  useEffect(() => {
    if (toast != null) toast.error(error);
  }, [error]);

  return (
    <div>
      <Header />
      <HomeBanner />
      <div className="lg:px-32 md:px-24 sm:px-10 px-4">
        <HomeContent />
        <HomePagination />
      </div>
    </div>
  );
};

export default HomePage;
