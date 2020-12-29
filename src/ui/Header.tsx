import {css} from '@linaria/core';
import {CFC} from '../types/react';
import {unit, px} from '../theme/units';
import {color} from '../theme/palette';
import {useInter} from '../inter';
import {capitalize} from '../utils/string';
import {Row} from './Row';
import {InternalLink} from './InternalLink';
import {BuildButton} from './BuildButton';
import {bem} from '../bem';
import {useQuery} from '../hooks/use-query';
import {route} from '../hooks/use-router';

export const HEIGHT = unit(6);

const main = css`
  position: fixed;
  width: 100%;
  justify-content: center;
  background-color: ${color('majorDark')};
  height: ${px(HEIGHT)};
`;

const link = css`
  padding: 0 ${unit(3, px)};

  &__active {
    color: ${color('decore')};
  }
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

  const {route: path} = useQuery();

  return (
    <Row className={bem(main, className)}>
      <Row className={bem({[segment]: {start: true}})}></Row>
      <Row className={bem({[segment]: {center: true}})}>
        <InternalLink path="home" className={bem({[link]: {active: path === route('home')}})}>
          {capitalize(t('home'))}
        </InternalLink>
        <InternalLink path="about" className={bem({[link]: {active: path === route('about')}})}>
          {capitalize(t('about'))}
        </InternalLink>
      </Row>
      <Row className={bem({[segment]: {end: true}})}>
        <BuildButton onClick={onMenu} />
      </Row>
    </Row>
  );
};
