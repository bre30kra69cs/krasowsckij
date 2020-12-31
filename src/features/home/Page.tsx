import {CFC} from '../../types/react';
import {PageTemplate} from '../shared/PageTemplate';
import {Preview} from '../../types/data';
import {ArticleCard} from '../../ui/cards/ArticleCard';
import {ColLine} from '../../ui/boxs/ColLine';
import {css} from '@linaria/core';
import {bem} from '../../bem';
import {unit, px} from '../../theme/units';
import {useViewType} from '../../hooks/use-view-type';

export const main = css`
  align-items: center;
  padding: ${unit(6, px)} 0;
`;

interface Props {
  previews: Preview[];
}

export const HomePage: CFC<Props> = ({className, previews}) => {
  useViewType();

  return (
    <PageTemplate className={bem(main, className)}>
      <ColLine gap="m">
        {previews.map((preview, index) => {
          return <ArticleCard key={index} info={preview} />;
        })}
      </ColLine>
    </PageTemplate>
  );
};
