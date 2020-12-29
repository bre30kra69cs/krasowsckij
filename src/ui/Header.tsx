import {css} from '@linaria/core';
import {CFC} from '../types/react';
import {unit, px} from '../theme/units';
import {color} from '../theme/palette';
import {useInter} from '../inter';
import {capitalize} from '../utils/capitalize';
import {Row} from './Row';
import {InternalLink} from './InternalLink';
import {BuildButton} from './BuildButton';
import {bem} from '../bem';
import {useQuery} from '../hooks/use-query';
import {route} from '../hooks/use-router';
import {useStore} from '../store/store';

export const HEIGHT = unit(8);

const main = css`
  position: fixed;
  width: 100%;
  justify-content: center;
  background-color: ${color('majorDark')};
  height: ${px(HEIGHT)};
  transition: 0.2s;

  &__small {
    height: ${unit(4, px)};
    transition: 0.2s;
    box-shadow: 0 0 ${unit(1.5, px)} ${unit(0.1, px)};
  }
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

  &__unscolling {
    padding-right: 15px;
  }
`;

export interface Props {
  onMenu?: () => void;
}

export const Header: CFC<Props> = ({className, onMenu}) => {
  const {t} = useInter();

  const {state} = useStore();

  const {route: path} = useQuery();

  return (
    <Row className={bem({[main]: {small: state.viewType === 'small'}}, className)}>
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
