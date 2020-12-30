import {Article} from '../types/data';
import {loggerManager} from '../logger';
import fs from 'fs';
import path from 'path';

const ARTICLES_DIR = path.join(process.cwd(), 'data/articles');

const POSTFIX = 'md';

const createArticlesManager = () => {
  const get = (id: string): Article => {
    try {
      const article = fs.readFileSync(`${ARTICLES_DIR}/${id}.${POSTFIX}`, {encoding: 'utf-8'});
      return article;
    } catch (err) {
      loggerManager.error(err);
      return '';
    }
  };

  return {
    get
  };
};

export const articlesManager = createArticlesManager();
