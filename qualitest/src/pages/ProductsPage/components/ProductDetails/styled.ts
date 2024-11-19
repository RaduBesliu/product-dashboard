import styled from "styled-components";
import { COLORS } from "../../../../utils";
import FullscreenIcon from "@mui/icons-material/Fullscreen";

export const Components = {
  Container: styled.div`
    flex: 2;
    height: 100%;

    display: flex;
    gap: 64px;

    padding: 64px;

    background-color: ${COLORS.gray};
  `,

  LeftWrapper: styled.div`
    flex: 1.5;

    display: flex;
    flex-direction: column;
    gap: 16px;
  `,

  TopWrapper: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 4px;
  `,

  Title: styled.h1``,

  CostContainer: styled.div`
    display: flex;
    gap: 6px;
  `,

  Price: styled.p``,

  DiscountPercentage: styled.p``,

  ImageContainer: styled.div`
    position: relative;
    max-width: 200px;

    cursor: pointer;
  `,

  Image: styled.img`
    width: 100%;
    aspect-ratio: 1/1;

    object-fit: cover;
  `,

  StyledFullScreenIcon: styled(FullscreenIcon)`
    position: absolute;
    top: 16px;
    right: 16px;

    width: 32px;
    height: 32px;

    padding: 8px 16px;
    color: #888;
  `,

  Description: styled.p``,

  DimensionList: styled.ul``,

  DimensionItem: styled.li``,

  Weight: styled.p``,

  RightWrapper: styled.div`
    flex: 1;
    display: flex;

    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
  `,

  StarAndReviewsWrapper: styled.div`
    width: 100%;
    max-width: 360px;

    display: flex;
    flex-direction: column;
    gap: 16px;
  `,

  ReviewsContainer: styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
  `,

  ActionsWrapper: styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
  `,
};
