type ConvertParamProps = (
  s: string | string[] | undefined
) => string | undefined;

export const convertParam: ConvertParamProps = (s) => {
  return typeof s === "string" && !isNaN(Number(s))
    ? s
    : Array.isArray(s) && s.length > 0 && !isNaN(Number(s))
    ? s[0]
    : undefined;
};
