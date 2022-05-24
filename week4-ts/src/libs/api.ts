import { kakaoClient } from 'libs';

import { Params } from '../core/resultsType';
export const searchStore = async (params: Params) => {
  return kakaoClient.get('', { params });
};
