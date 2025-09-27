export interface ILoginModalProps {
  isModalOpen: boolean;
  onClose?: () => void;
  onSubmit?: (email: string, password: string) => void;
}