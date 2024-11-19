import styled from "styled-components";
import { COLORS } from "../../../../utils";

export const Components = {
  Container: styled.button`
    cursor: pointer;

    background-color: ${COLORS.gold};
    padding: 2px 4px;

    border-radius: 6px;

    user-select: none;
  `,
};
