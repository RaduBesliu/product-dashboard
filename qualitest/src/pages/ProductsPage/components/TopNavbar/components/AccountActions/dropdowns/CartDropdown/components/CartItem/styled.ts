import styled from "styled-components";
import { COLORS } from "../../../../../../../../../../utils";

export const Components = {
  Container: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  `,

  ItemWrapper: styled.div`
    display: flex;
    align-items: center;
  `,

  Image: styled.img`
    width: 50px;
    height: 50px;
    object-fit: contain;
    margin-right: 10px;
  `,

  Description: styled.div``,

  Paragraph: styled.p``,

  ButtonsWrapper: styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
  `,

  Button: styled.button`
    background-color: ${COLORS.white};

    border: 1px solid ${COLORS.black};
    border-radius: 4px;

    padding: 4px 8px;

    cursor: pointer;
  `,
};
