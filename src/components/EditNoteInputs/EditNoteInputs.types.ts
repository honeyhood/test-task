export interface EditInputs {
  title: string;
  text: string;
}

export interface Props {
  id: string;
  setModalOpen: (value: boolean) => void;
}
