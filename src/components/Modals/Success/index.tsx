import Link from "next/link";
import React, { SetStateAction } from "react";
import { FaTimes } from "react-icons/fa";
import { CloseModal, Container, Modal } from "./styles";

type SuccessModalProps = {
  success: string;
  show: boolean;
  path: string;
  pathText: string;
};
export const SucessModal = ({
  success,
  show,
  path,
  pathText,
}: SuccessModalProps) => {
  return (
    <React.Fragment>
      {show && (
        <Container>
          <Modal>
            <strong>{success ? success : "Good Request"}</strong>
            <Link href={path}>
              <span>{pathText}</span>
            </Link>
          </Modal>
        </Container>
      )}
    </React.Fragment>
  );
};
