import {css} from '@linaria/core';
import {CFC} from '@app/types';
import {unit, px} from '@app/theme';
import {useInter} from '@app/inter';
import {capitalize} from '@app/utils';
import {Row} from './Row';
import {Link} from './Link';

const main = css`
  justify-content: center;
`;

const link = css`
  padding: 0 ${unit(3, px)};
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
