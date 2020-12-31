import {css} from '@linaria/core';
import {CloseIcon} from '../icons/CloseIcon';
import {Button, Props} from './Button';
import {CFC} from '../../types/react';
import {bem} from '../../bem';
import {unit, px} from '../../theme/units';
import {color} from '../../theme/palette';

const icon = css`
  fill: ${color('majorDark')};
`;

const main = css`
  padding: ${unit(2, px)};

  @keyframes hovering {
    from {
      fill: ${color('majorDark')};
    }
    to {
      fill: ${color('decore')};
    }
  }

  &:hover .${icon} {
    fill: ${color('decore')};
    animation-name: hovering;
    animation-duration: 0.4s;
  }
`;

export const CloseButton: CFC<Props> = ({className, onClick}) => {
  return (
    <Button className={bem(main, className)} onClick={onClick}>
      <CloseIcon className={icon} />
    </Button>
  );
};
