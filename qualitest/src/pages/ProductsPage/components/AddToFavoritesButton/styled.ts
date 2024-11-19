import styled from "styled-components";
import StarIcon from "@mui/icons-material/Star";
import { COLORS } from "../../../../utils";

export const Components = {
  Container: styled.div`
    cursor: pointer;
  `,

  StyledStarIcon: styled(StarIcon)<{
    $isFavorite: boolean;
  }>`
    color: ${({ $isFavorite }) => ($isFavorite ? COLORS.gold : COLORS.black)};
  `,
};
