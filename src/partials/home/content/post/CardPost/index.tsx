/* eslint-disable @next/next/no-img-element */
import { CardIdea } from "@/types/response/IdeaResponse";
import { FormattedDate } from "react-intl";
import { CardContainer } from "./styles";

export default function CardPost({ data }: { data: CardIdea }) {
  return (
    <CardContainer className="bg-white  rounded-md shadow-lg">
      <img
        src={
          "https://karirlab-prod-bucket.s3.ap-southeast-1.amazonaws.com/files/privates/DBR0BMW6SweFcrbB5zqafsj7EcLuPa60P6P0EmhQ.png"
        }
        alt="gambar"
        className="aspect-[15/10] object-cover w-full shadow-sm rounded-md"
        loading="lazy"
      />
      <div className="px-3 py-4">
        <div className="md:text-sm text-xs text-slate-700 font-medium">
          <FormattedDate
            value={data.created_at}
            day="2-digit"
            month="long"
            year="numeric"
          />
        </div>
        <div className="title md:text-base text-sm font-medium">
          {data.title}
        </div>
      </div>
    </CardContainer>
  );
}
