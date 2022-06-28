import { PatchBody } from '../dataType';
import { reqAPI } from '.';
export const getLetters = () => {
  return reqAPI.get('/letter');
};

export const postLetter = (formData: FormData) => {
  return reqAPI.post('/letter', formData);
};

export const patchLetter = (reqParams: string, patchBody: PatchBody) => {
  return reqAPI.patch(`/letter/${reqParams}`, patchBody);
};
