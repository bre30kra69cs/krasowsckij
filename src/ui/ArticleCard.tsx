import {css} from '@linaria/core';
import {CFC} from '../types/react';
import {Article} from '../types/article';
import {Card} from './Card';
import {Row} from './Row';
import {Text} from './Text';
import {Title} from './Title';
import {color} from '../theme/palette';
import {bem} from '../bem';
import {unit, px} from '../theme/units';
import {ColLine} from './ColLine';
import {Image} from './Image';

const main = css`
  background-color: ${color('majorDark')};
  width: ${unit(100, px)};
`;

const imageCN = css`
  width: ${unit(100, px)};
`;

const imageCard = css`
  width: ${unit(100, px)};
  padding: 0;
`;

interface Props {
  article: Article;
}

export const ArticleCard: CFC<Props> = ({article, className}) => {
  const {title, preview, image} = article;

  return (
    <Card className={bem(main, className)}>
      <ColLine>
        <Row>
          <Title type="minor">{title}</Title>
        </Row>
        <Row>
          <Card className={imageCard}>
            <Image className={imageCN} src={image} />
          </Card>
        </Row>
        <Row>
          <Text type="minor">{preview}</Text>
        </Row>
      </ColLine>
    </Card>
  );
};
