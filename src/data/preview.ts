import statirjs from '../../data/preview/statirjs.json';
import {Preview} from '../types/data';

const createPreviewManager = () => {
  const get = () => {
    return [statirjs] as Preview[];
  };

  return {
    get
  };
};

export const previewManager = createPreviewManager();
