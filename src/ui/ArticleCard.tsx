import {css} from '@linaria/core';
import {CFC} from '../types/react';
import {Article} from '../types/article';
import {Card} from './Card';
import {Row} from './Row';
import {Text} from './Text';
import {color} from '../theme/palette';
import {bem} from '../bem';
import {unit, px} from '../theme/units';
import {ColLine} from './ColLine';
import {Image} from './Image';
import {useInter} from '../inter';
import {InternalLink} from './InternalLink';
import {capitalize} from '../utils/capitalize';

const main = css`
  background-color: ${color('majorDark')};
  width: ${unit(100, px)};
  box-shadow: 0 ${unit(0.2, px)} ${unit(0.5, px)};
`;

const imageCN = css`
  width: ${unit(100, px)};
`;

const imageCard = css`
  width: ${unit(100, px)};
  padding: 0;
`;

const titleCN = css`
  font-size: ${unit(6, px)};
  color: ${color('minorDark')};
`;

const linkTitle = css`
  padding: ${unit(2, px)} 0;
`;

const linkRead = css`
  padding: ${unit(2, px)};
`;

interface Props {
  article: Article;
}

export const ArticleCard: CFC<Props> = ({article, className}) => {
  const {lng, t} = useInter();

  // const {id} = article;

  const {title, preview, image} = article[lng];

  return (
    <Card className={bem(main, className)}>
      <ColLine>
        <Row className={linkTitle}>
          <InternalLink path="article" className={titleCN}>
            {title}
          </InternalLink>
        </Row>
        <Row>
          <Card className={imageCard}>
            <Image className={imageCN} src={image} />
          </Card>
        </Row>
        <Row>
          <Text type="minor">{preview}</Text>
        </Row>
        <Row className={linkRead}>
          <InternalLink path="article">{capitalize(t('read'))}</InternalLink>
        </Row>
      </ColLine>
    </Card>
  );
};
