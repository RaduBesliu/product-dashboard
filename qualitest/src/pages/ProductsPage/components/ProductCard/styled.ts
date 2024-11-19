import styled from "styled-components";
import { COLORS } from "../../../../utils";

export const Components = {
  Container: styled.div`
    display: flex;
    align-items: center;
    gap: 16px;

    min-width: 100px;

    padding: 8px 8px 0 8px;

    background-color: ${COLORS.cardBackground};

    border-radius: 8px;

    cursor: pointer;

    @media (max-width: 818px) {
      flex-direction: column;
      padding-bottom: 8px;
    }
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

    @media (max-width: 910px) {
      display: none;
    }
  `,

  TopWrapper: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 4px;

    @media (max-width: 910px) {
      flex-direction: column;
      align-items: flex-start;
    }
  `,

  Title: styled.h1`
    font-size: 1.2rem;
  `,

  CostContainer: styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    align-items: flex-end;
  `,

  Price: styled.p`
    font-weight: bold;
  `,

  DiscountPercentage: styled.p`
    background-color: ${COLORS.green};
    padding: 2px;
    border-radius: 2px;

    font-weight: bold;
  `,

  BottomWrapper: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 1100px) {
      flex-direction: column;
    }
  `,

  ActionsWrapper: styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
  `,
};
