import {css} from '@linaria/core';
import {CFC} from '../types/react';
import {unit, px} from '../theme/units';
import {color} from '../theme/palette';
import {useInter} from '../inter';
import {capitalize} from '../utils/string';
import {Row} from './Row';
import {Link} from './Link';

const main = css`
  justify-content: center;
  background-color: ${color('majorShade')};
  height: ${unit(4, px)};
`;

const link = css`
  padding: 0 ${unit(3, px)};
`;

export const Header: CFC = () => {
  const {t} = useInter();

  return (
    <Row className={main}>
      <Link className={link}>{capitalize(t('home'))}</Link>
      <Link className={link}>{capitalize(t('articles'))}</Link>
    </Row>
  );
};
