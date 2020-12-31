import {css} from '@linaria/core';
import {CFC} from '../../types/react';
import {Card} from '../cards/Card';
import {bem} from '../../bem';
import {Image, Props as ImageProps} from './Image';
import {color} from '../../theme/palette';

const cardImage = css`
  padding: 0;
  background: ${color('minorDark')};
`;

const image = css`
  max-width: 100%;
  height: auto;
`;

type Props = ImageProps;

export const CardImage: CFC<Props> = ({className, src}) => {
  return (
    <Card className={bem(cardImage, className)}>
      <Image className={image} src={src} />
    </Card>
  );
};
