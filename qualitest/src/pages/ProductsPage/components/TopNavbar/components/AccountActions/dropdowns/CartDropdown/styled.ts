import styled from "styled-components";

export const Components = {
  ModalButton: styled.button``,

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
};

export const cartModalStyles = {
  overlay: {
    backgroundColor: "transparent",
  },
  content: {
    top: "50px",
    right: "20px",
    left: "auto",
    bottom: "auto",
    width: "300px",
    maxHeight: "calc(100vh - 100px)",
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    overflow: "auto",
  },
};
