import {css} from '@linaria/core';
import {CFC} from '../types/react';
import {unit, color} from '../design';
import {Row} from './Row';
import {Link} from './Link';
import {useInter} from '../inter';
import {capitalize} from '../utils/string';

const main = css`
  height: ${unit(5)}px;
  background-color: ${color('grayShade')};
  justify-content: center;
`;

const link = css`
  padding: 0 ${unit(3)}px;
`;

export const Header: CFC = () => {
  const {t} = useInter();

  return (
    <Row className={main}>
      <Link className={link}>{capitalize(t('home'))}</Link>
      <Link className={link}>CSS</Link>
      <Link className={link}>TS</Link>
    </Row>
  );
};
