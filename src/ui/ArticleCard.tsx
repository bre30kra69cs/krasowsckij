import {css} from '@linaria/core';
import {CFC} from '../types/react';
import {Preview} from '../types/data';
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
import {ReadLink} from './ReadLink';

const main = css`
  background-color: ${color('majorDark')};
  width: ${unit(100, px)};
  box-shadow: 0 ${unit(0.2, px)} ${unit(0.5, px)};
`;

const imageCN = css`
  background-color: ${color('majorLight')};
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

const link = css`
  padding: ${unit(2, px)} 0;
`;

interface Props {
  info: Preview;
}

// TODO: extend link areas
export const ArticleCard: CFC<Props> = ({info, className}) => {
  const {lng} = useInter();

  const {defaultLng} = info;
  const target = info[lng] ?? info[defaultLng];
  const {title, preview, image} = target;

  return (
    <Card className={bem(main, className)}>
      <ColLine gap="s">
        <Row className={link}>
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
        <Row className={link}>
          <ReadLink path="article" />
        </Row>
      </ColLine>
    </Card>
  );
};
