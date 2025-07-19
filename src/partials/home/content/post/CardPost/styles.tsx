import styled from "@emotion/styled";

export const CardContainer = styled.div`
  & .title {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 3; /* Menetapkan jumlah maksimum baris */
    text-overflow: ellipsis;
  }
`;
