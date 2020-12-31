import {Article} from '../types/data';
import {loggerManager} from '../logger';
import fs from 'fs';
import path from 'path';
import marked from 'marked';

import {registerLanguage, highlightAuto} from 'highlight.js';
import javascript from 'highlight.js/lib/languages/javascript';

registerLanguage('javascript', javascript);

const ARTICLES_DIR = path.join(process.cwd(), 'data/articles');

const POSTFIX = 'md';

const createArticlesManager = () => {
  const get = (id: string): Article => {
    try {
      const article = fs.readFileSync(`${ARTICLES_DIR}/${id}.${POSTFIX}`, {encoding: 'utf-8'});
      const parsedMd = marked(article, {
        highlight(source) {
          return highlightAuto(source).value;
        }
      });

      return parsedMd;
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
