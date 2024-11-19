import styled from "styled-components";

export const Components = {
  Container: styled.div``,

  Image: styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;

    cursor: pointer;
  `,

  FullScreenContainer: styled.div`
    position: relative;
  `,

  FullScreenImage: styled.img`
    max-height: 90vh;
    max-width: 90vw;
    object-fit: cover;
    border-radius: 8px;
  `,

  CloseButton: styled.button`
    position: absolute;
    top: 16px;
    right: 16px;
    background: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    border-radius: 50%;
    width: 32px;
    height: 32px;
    cursor: pointer;
    font-size: 16px;
  `,
};
