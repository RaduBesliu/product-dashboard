import { useState } from "react";
import Modal from "react-modal";
import { Components } from "./styled";

Modal.setAppElement("#root");

const FullScreenImage = ({ src, alt }: { src: string; alt?: string }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <Components.Container>
      <Components.Image src={src} alt={alt || "Image"} onClick={openModal} />

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.8)",
          },
          content: {
            border: "none",
            background: "transparent",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 0,
            inset: "0px",
          },
        }}
      >
        <Components.FullScreenContainer>
          <Components.FullScreenImage
            src={src}
            alt={alt || "Full-screen image"}
          />
          <Components.CloseButton onClick={closeModal}>
            ✕
          </Components.CloseButton>
        </Components.FullScreenContainer>
      </Modal>
    </Components.Container>
  );
};

export default FullScreenImage;
