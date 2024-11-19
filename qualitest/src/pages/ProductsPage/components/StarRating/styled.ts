import styled from "styled-components";
import { COLORS } from "../../../../utils";

export const Components = {
  Container: styled.div`
    display: inline-block;
    position: relative;
    font-size: 24px;
    padding-bottom: 5px;
    color: ${COLORS.darkGray};
    overflow: hidden;
  `,

  Stars: styled.div<{ $rating: number }>`
    position: relative;
    display: inline-block;
    white-space: nowrap;
    background: linear-gradient(
      90deg,
      ${COLORS.gold} ${({ $rating }) => ($rating / 5) * 100}%,
      ${COLORS.darkGray} ${({ $rating }) => ($rating / 5) * 100}%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  `,
};
