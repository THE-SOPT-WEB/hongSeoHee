export interface LetterInfo {
  content: string;
  hint: string;
  images: Array<string>;
  name: string;
  password: string;
  _id: string;
}

export interface LetterProps {
  letterInfo: LetterInfo;
}
export interface LetterFormProps {
  letterInfo: LetterInfo | null;
}
export interface ModalProps {
  letterInfo: Pick<LetterInfo, 'hint' | 'password'>;
  isOpen: boolean;
  closeModal: () => void;
  checkAnswer: (isCorrect: boolean) => void;
}
export interface EditLetterLocation {
  state: LetterInfo;
}
export interface PatchBody {
  name?: string;
  password?: string;
  hint?: string;
  content?: string;
}
