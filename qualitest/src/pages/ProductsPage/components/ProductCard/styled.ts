import styled from "styled-components";
import { COLORS } from "../../../../utils";

export const Components = {
  Container: styled.div`
    display: flex;
    align-items: center;
    max-width: 400px;
    gap: 16px;

    padding: 8px 8px 0 8px;

    background-color: ${COLORS.gray};

    cursor: pointer;
  `,

  Thumbnail: styled.img`
    border-radius: 50%;
    width: 48px;
    height: 48px;

    background-color: transparent;
  `,

  Details: styled.div`
    flex: 1;
    width: 100px;
  `,

  Description: styled.div`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `,

  TopWrapper: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 4px;
  `,

  Title: styled.h1`
    font-size: 1.2rem;
  `,

  CostContainer: styled.div`
    display: flex;
    gap: 6px;
  `,

  Price: styled.p``,

  DiscountPercentage: styled.p``,

  BottomWrapper: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  ActionsWrapper: styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
  `,
};
