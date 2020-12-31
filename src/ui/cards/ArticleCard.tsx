import {css} from '@linaria/core';
import {CFC} from '../../types/react';
import {Preview} from '../../types/data';
import {Card} from './Card';
import {MainText} from '../typography/MainText';
import {color} from '../../theme/palette';
import {bem} from '../../bem';
import {unit, px} from '../../theme/units';
import {ColLine} from '../boxs/ColLine';
import {useInter} from '../../inter';
import {InternalLink} from '../links/InternalLink';
import {ReadLink} from '../links/ReadLink';
import {CardImage} from '../images/CardImage';

const acrticleCard = css`
  background-color: ${color('majorLight')};
  width: ${unit(100, px)};
  box-shadow: 0 ${unit(0.2, px)} ${unit(0.5, px)};
`;

const acrticleCardPrevew = css`
  text-align: justify;

  &:first-letter {
    margin-left: ${unit(4, px)};
  }
`;

interface Props {
  info: Preview;
}

export const ArticleCard: CFC<Props> = ({info, className}) => {
  const {lng} = useInter();

  const {id, defaultLng} = info;
  const target = info[lng] ?? info[defaultLng];
  const {title, preview, image} = target;

  return (
    <Card className={bem(acrticleCard, className)}>
      <ColLine gap="m">
        <InternalLink path="article" id={id} size="m">
          {title}
        </InternalLink>
        <CardImage src={image} />
        <MainText className={acrticleCardPrevew}>{preview}</MainText>
        <ReadLink path="article" id={id} />
      </ColLine>
    </Card>
  );
};
