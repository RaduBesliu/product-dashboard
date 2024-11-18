import styled from "styled-components";
import { COLORS } from "../../utils";

export const Components = {
  Container: styled.div`
    width: 100vw;
    height: 100vh;

    padding: 16px;

    background-color: ${COLORS.white};
  `,

  PageWrapper: styled.div`
    width: 100%;
    height: 90%;

    display: flex;
    gap: 64px;
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
};