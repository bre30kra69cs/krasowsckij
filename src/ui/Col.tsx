import {MouseEvent} from 'react';
import {css} from '@linaria/core';
import {CFC} from '../types/react';
import {bem} from '../bem';

export const main = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export interface Props {
  onClick?: (event?: MouseEvent) => void;
}

export const Col: CFC<Props> = ({children, className, onClick}) => {
  return (
    <div className={bem(main, className)} onClick={onClick}>
      {children}
    </div>
  );
};
