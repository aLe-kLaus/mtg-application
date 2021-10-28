import React, { SetStateAction } from "react";
import { FaTimes } from "react-icons/fa";
import { CloseModal, Container, Modal } from "./styles";

type ErrorModalProps = {
  error: string;
  show: boolean;
  setShow: React.Dispatch<SetStateAction<boolean>>;
};
export const ErrorModal = ({ error, show, setShow }: ErrorModalProps) => {
  return (
    <React.Fragment>
      {show && (
        <Container>
          <Modal>
            <strong>
              {error ? error : "Ooops, some error happened during the request"}
            </strong>
            <CloseModal onClick={() => setShow(false)}>
              <FaTimes />
            </CloseModal>
          </Modal>
        </Container>
      )}
    </React.Fragment>
  );
};
