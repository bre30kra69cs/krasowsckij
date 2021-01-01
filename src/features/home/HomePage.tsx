import {CFC} from '../../types/react';
import {Preview} from '../../types/data';
import {MainTemplate} from '../shared/MainTemplate';
import {PreviewCard} from '../../ui/cards/PreviewCard';
import {ColLine} from '../../ui/boxes/ColLine';

interface Props {
  previews: Preview[];
}

export const HomePage: CFC<Props> = ({className, previews}) => {
  return (
    <MainTemplate className={className}>
      <ColLine gap="m">
        {previews.map((preview, index) => {
          return <PreviewCard key={index} preview={preview} />;
        })}
      </ColLine>
    </MainTemplate>
  );
};
