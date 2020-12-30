import {Preview} from '../types/data';
import {loggerManager} from '../logger';
import fs from 'fs';
import path from 'path';

const PREVIEW_DIR = path.join(process.cwd(), 'data/preview');

const createPreviewManager = () => {
  const get = (): Preview[] => {
    try {
      const dir = fs.readdirSync(PREVIEW_DIR);

      const previews = dir
        .map((preview) => fs.readFileSync(`${PREVIEW_DIR}/${preview}`, {encoding: 'utf-8'}))
        .map((preview) => JSON.parse(preview));

      return previews;
    } catch (err) {
      loggerManager.error(err);
      return [];
    }
  };

  return {
    get
  };
};

export const previewManager = createPreviewManager();
