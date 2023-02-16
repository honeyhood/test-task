import { Modal, Button, Group } from '@mantine/core';
import { Props } from './Modal.types';

export const ModalWindow = ({
  children,
  modalButtonText,
  modalOpen,
  setModalOpen,
}: Props) => {
  return (
    <>
      <Modal opened={modalOpen} onClose={() => setModalOpen(false)}>
        {children}
      </Modal>

      <Group position="center">
        <Button size="sm" radius="xl" onClick={() => setModalOpen(true)}>
          {modalButtonText}
        </Button>
      </Group>
    </>
  );
};
