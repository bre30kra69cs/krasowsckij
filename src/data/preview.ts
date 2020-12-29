import testPreview from '../../data/preview/test.json';
import {Preview} from '../types/data';

const createPreviewManager = () => {
  const get = () => {
    return [testPreview, testPreview, testPreview] as Preview[];
  };

  return {
    get
  };
};

export const previewManager = createPreviewManager();
