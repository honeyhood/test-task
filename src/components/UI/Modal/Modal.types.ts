export interface Props {
  children: React.ReactNode;
  modalButtonText: string;
  modalOpen: boolean;
  setModalOpen: (value: boolean) => void;
}
