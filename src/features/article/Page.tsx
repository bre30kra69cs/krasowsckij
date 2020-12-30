import {CFC} from '../../types/react';
import {PageTemplate} from '../shared/PageTemplate';
import {Article} from '../../types/data';
import {css} from '@linaria/core';
import {bem} from '../../bem';
import {unit, px} from '../../theme/units';
import {useViewType} from '../../hooks/use-view-type';
import {Col} from '../../ui/Col';

const main = css`
  align-items: center;
  padding: ${unit(6, px)} 0;
`;

const content = css`
  max-width: ${unit(150, px)};
`;

interface Props {
  article: Article;
}

export const ArticlePage: CFC<Props> = ({className}) => {
  useViewType();

  return (
    <PageTemplate className={bem(main, className)}>
      <Col className={content}></Col>
    </PageTemplate>
  );
};
