import {Action} from '../types/store';

export const setSmalViewType: Action = (state) => {
  return {
    ...state,
    viewType: 'small'
  };
};

export const setNormalViewType: Action = (state) => {
  return {
    ...state,
    viewType: 'normal'
  };
};
