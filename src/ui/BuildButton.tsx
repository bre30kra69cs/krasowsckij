import {css} from '@linaria/core';
import {BuildIcon} from './BuildIcon';
import {Button, Props} from './Button';
import {CFC} from '../types/react';
import {bem} from '../bem';
import {unit, px} from '../theme/units';
import {color} from '../theme/palette';

const icon = css`
  fill: ${color('minor')};
`;

const main = css`
  padding: 0 ${unit(3, px)};

  @keyframes hovering {
    from {
      fill: ${color('minor')};
    }
    to {
      fill: ${color('decore')};
    }
  }

  &:hover .${icon} {
    animation-name: hovering;
    animation-fill-mode: forwards;
    animation-duration: 0.4s;
  }
`;

export const BuildButton: CFC<Props> = ({className, onClick}) => {
  return (
    <Button className={bem(main, className)} onClick={onClick}>
      <BuildIcon className={icon} />
    </Button>
  );
};
