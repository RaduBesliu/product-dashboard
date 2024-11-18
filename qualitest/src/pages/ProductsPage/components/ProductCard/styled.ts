import styled from "styled-components";
import { COLORS } from "../../../../utils";

export const Components = {
  Container: styled.div`
    display: flex;
    align-items: center;
    gap: 16px;

    padding: 8px 8px 0 8px;

    background-color: ${COLORS.gray};
  `,

  Thumbnail: styled.img`
    border-radius: 50%;
    width: 48px;
    height: 48px;

    background-color: transparent;
  `,

  Details: styled.div``,

  Description: styled.p``,

  TopWrapper: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  Title: styled.h3``,

  CostContainer: styled.div`
    display: flex;
    gap: 6px;
  `,

  Price: styled.p``,

  DiscountPercentage: styled.p``,
};
