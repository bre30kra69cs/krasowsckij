import {useMemo} from 'react';
import {CFC} from '../../types/react';
import {PageTemplate} from '../shared/PageTemplate';
import {Article} from '../../types/data';
import {css} from '@linaria/core';
import {bem} from '../../bem';
import {unit, px} from '../../theme/units';
import {useViewType} from '../../hooks/use-view-type';
import {Col} from '../../ui/boxs/Col';

const main = css`
  align-items: center;
  padding-top: ${unit(6, px)};
  padding-bottom: ${unit(20, px)};
`;

const content = css``;

interface Props {
  article: Article;
}

export const ArticlePage: CFC<Props> = ({className, article}) => {
  useViewType();

  const html = useMemo(() => {
    return {__html: article};
  }, [article]);

  return (
    <PageTemplate className={bem(main, className)}>
      <Col className={content} dangerouslySetInnerHTML={html} />
    </PageTemplate>
  );
};
