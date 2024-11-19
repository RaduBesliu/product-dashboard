import styled from "styled-components";
import { COLORS } from "../../../../../../utils";

export const Components = {
  Container: styled.div`
    width: 100%;
  `,

  Title: styled.h3``,

  SliderItem: styled.div`
    padding: 10px;
    text-align: center;
  `,

  Comment: styled.p`
    font-style: italic;
  `,

  Reviewer: styled.p`
    font-size: 12px;
    font-weight: bold;
    color: ${COLORS.darkGray};
  `,

  Date: styled.p`
    font-size: 12px;
    color: ${COLORS.darkGray};
  `,
};
