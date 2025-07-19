export type AppendIdeaProps = "small_image" | "medium_image";

export interface getIdeaParams {
  pageNumber?: string;
  pageSize?: string;
  append?: ("small_image" | "medium_image")[];
  sort?: "published_at" | "-published_at";
}

export function getIdea(param?: getIdeaParams) {
  const params = [];
  param?.pageNumber && params.push(`page[number]=${param?.pageNumber}`);
  param?.pageSize && params.push(`page[size]=${param?.pageSize}`);
  param?.sort && params.push(`sort=${param?.sort}`);
  if (!!param?.append) {
    param?.append.forEach((e) => {
      params.push(`append[]=${e}`);
    });
  }

  const paramString = params.join("&");

  return `api/ideas?${paramString}`;
}
