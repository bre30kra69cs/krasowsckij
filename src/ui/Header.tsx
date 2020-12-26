import {css} from '@linaria/core';
import {CFC} from '../types/react';
import {unit, px} from '../theme/units';
import {color} from '../theme/palette';
import {useInter} from '../inter';
import {capitalize} from '../utils/string';
import {Row} from './Row';
import {Link} from './Link';
import {BuildButton} from './BuildButton';
import {bem} from '../bem';

const main = css`
  justify-content: center;
  background-color: ${color('majorDark')};
  height: ${unit(6, px)};
`;

const link = css`
  padding: 0 ${unit(3, px)};
`;

const segment = css`
  flex: 1;

  &__start {
    justify-content: flex-start;
  }

  &__center {
    justify-content: center;
  }

  &__end {
    justify-content: flex-end;
  }
`;

export interface Props {
  onMenu?: () => void;
}

export const Header: CFC<Props> = ({className, onMenu}) => {
  const {t} = useInter();

  return (
    <Row className={bem(main, className)}>
      <Row className={bem({[segment]: {start: true}})}></Row>
      <Row className={bem({[segment]: {center: true}})}>
        <Link className={link}>{capitalize(t('home'))}</Link>
        <Link className={link}>{capitalize(t('articles'))}</Link>
      </Row>
      <Row className={bem({[segment]: {end: true}})}>
        <BuildButton onClick={onMenu} />
      </Row>
    </Row>
  );
};
