export interface IUserModalProps {
  isModalOpen: boolean;
  onClose?: () => void;
  onSubmit?: (email: string, password: string) => void;
}