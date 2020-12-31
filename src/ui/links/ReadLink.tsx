import {css} from '@linaria/core';
import {CFC} from '../../types/react';
import {ChevronIcon} from '../icons/ChevronIcon';
import {useInter} from '../../inter';
import {color} from '../../theme/palette';
import {bem} from '../../bem';
import {unit, px} from '../../theme/units';
import {capitalize} from '../../utils/capitalize';
import {NextLink, Props as NextLinkProps} from './NextLink';
import {TitleText, Props as TitleTextProps} from '../typography/TitleText';

const readLinkCard = css`
  padding: ${unit(2, px)};
  border-radius: ${unit(1, px)};
  border-color: ${color('minor')};
  border-width: ${unit(0.3, px)};
  fill: ${color('minor')};
  border-style: solid;
  transition: 0.4s;

  &:hover {
    fill: ${color('decoreShade')};
    border-color: ${color('decoreShade')};
    transition: 0.4s;
  }
`;

type Props = NextLinkProps & TitleTextProps;

export const ReadLink: CFC<Props> = ({className, path, id, size, active}) => {
  const {t} = useInter();

  return (
    <NextLink className={bem(readLinkCard, className)} path={path} id={id} active={active}>
      <TitleText size={size}>{capitalize(t('read'))}</TitleText>
      <ChevronIcon />
    </NextLink>
  );
};
