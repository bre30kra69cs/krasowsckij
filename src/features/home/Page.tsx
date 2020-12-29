import {CFC} from '../../types/react';
import {PageTemplate} from '../shared/PageTemplate';
import {Article} from '../../types/article';
import {ArticleCard} from '../../ui/ArticleCard';
import {ColLine} from '../../ui/ColLine';
import {css} from '@linaria/core';
import {bem} from '../../bem';
import {unit, px} from '../../theme/units';
import {useViewType} from '../../hooks/use-view-type';

export const main = css`
  align-items: center;
  padding: ${unit(6, px)} 0;
`;

interface Props {
  articles: Article[];
}

export const HomePage: CFC<Props> = ({className, articles}) => {
  useViewType();

  return (
    <PageTemplate className={bem(main, className)}>
      <ColLine gap="m">
        {articles.map((article, index) => {
          return <ArticleCard key={index} article={article} />;
        })}
      </ColLine>
    </PageTemplate>
  );
};
