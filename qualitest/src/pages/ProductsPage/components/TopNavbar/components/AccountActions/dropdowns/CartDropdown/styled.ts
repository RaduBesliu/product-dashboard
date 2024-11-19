import styled from "styled-components";

export const Components = {
  ModalButton: styled.button`
    background-color: transparent;
    padding: 0;
    margin: 0;
    box-shadow: none;
    border: none;

    cursor: pointer;
  `,

  Container: styled.div``,

  CartTitle: styled.h3`
    margin-bottom: 16px;
  `,

  Paragraph: styled.p``,

  ItemsContainer: styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
  `,

  Total: styled.p`
    font-weight: bold;
  `,
};
