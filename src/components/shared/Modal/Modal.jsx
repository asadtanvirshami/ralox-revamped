import React, { memo } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

const ModalCom = ({
  children,
  show,
  title,
  Close,
  onClick,
  footer,
  primaryAction,
  secondayAction,
  primaryText,
  secondaryText,
  scrollBehavior,
  size,
}) => {
  return (
    <>
      <Modal
        size={size}
        className="bg-black border-solid border border-white"
        isOpen={show}
        onOpenChange={Close}
        scrollBehavior={scrollBehavior}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
              <ModalBody>
                <>{children}</>
              </ModalBody>
              {footer && (
                <ModalFooter>
                  <Button
                    onClick={primaryAction}
                    color="danger"
                    variant="light"
                    onPress={onClick}
                  >
                    {primaryText}
                  </Button>
                  <Button
                    onClick={secondayAction}
                    color="primary"
                    onPress={onClick}
                  >
                    {secondaryText}
                  </Button>
                </ModalFooter>
              )}
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default memo(ModalCom);
