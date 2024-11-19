import styled from "styled-components";
import { COLORS } from "../../utils";

export const Components = {
  Container: styled.div`
    width: 100vw;
    height: 100vh;

    padding: 16px;

    background-color: ${COLORS.background};
  `,

  PageWrapper: styled.div`
    width: 100%;
    height: 90%;

    display: flex;
    gap: 64px;

    @media (max-width: 818px) {
      gap: 16px;
    }
  `,

  ProductsList: styled.div`
    flex: 1;

    display: flex;
    gap: 16px;
    flex-direction: column;
    overflow-y: auto;

    &::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
  `,

  Loading: styled.h1`
    font-size: 24px;
    color: ${COLORS.white};
  `,

  NoProducts: styled.h1`
    font-size: 24px;
    color: ${COLORS.white};
  `,
};
