import {css} from '@linaria/core';
import {BuildIcon} from '../icons/BuildIcon';
import {Button, Props} from './Button';
import {CFC} from '../../types/react';
import {bem} from '../../bem';
import {unit, px} from '../../theme/units';
import {color} from '../../theme/palette';

const icon = css`
  fill: ${color('minor')};
`;

const main = css`
  padding: 0 ${unit(3, px)};

  &:hover .${icon} {
    fill: ${color('decore')};
    transition: 0.4s;
  }
`;

export const BuildButton: CFC<Props> = ({className, onClick}) => {
  return (
    <Button className={bem(main, className)} onClick={onClick}>
      <BuildIcon className={icon} />
    </Button>
  );
};
