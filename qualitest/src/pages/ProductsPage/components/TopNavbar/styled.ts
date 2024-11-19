import styled from "styled-components";
import { COLORS } from "../../../../utils";

export const Components = {
  Container: styled.div`
    width: 100%;
    height: 10%;

    display: flex;
    justify-content: space-between;
  `,

  Header: styled.header`
    font-size: 2rem;
    color: ${COLORS.white};
  `,
};
