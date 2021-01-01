import {css} from '@linaria/core';
import {color} from '../../theme/palette';

export interface Props {
  active?: boolean;
}

export const LinkCN = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  outline: none;
  text-decoration: none;

  & span {
    transition: 0.4s;
  }

  &:hover {
    & span {
      color: ${color('decoreShade')};
      transition: 0.4s;
    }
  }

  &__active {
    & span {
      color: ${color('decore')};
      transition: 0.4s;
    }
  }
`;

// TODO: replace to link component
export const LinkAncherCN = `
  outline: none;
  color: ${color('decore')};
  transition: 0.4s;

  &:hover {
    color: ${color('decoreShade')};
    transition: 0.4s;
  }
`;
