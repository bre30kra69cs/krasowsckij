import {MouseEvent} from 'react';
import {css} from '@linaria/core';
import {CFC} from '../types/react';
import {bem} from '../bem';

const main = css`
  cursor: pointer;
  border: 0;
  background-color: inherit;
  outline: none;
`;

export interface Props {
  onClick?: (e: MouseEvent) => void;
}

export const Button: CFC<Props> = ({children, className, onClick}) => {
  return (
    <button className={bem(main, className)} onClick={onClick}>
      {children}
    </button>
  );
};
