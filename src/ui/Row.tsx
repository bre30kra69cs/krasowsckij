import {MouseEvent} from 'react';
import {css} from '@linaria/core';
import {CFC} from '../types/react';
import {bem} from '../bem';

const main = css`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

interface Props {
  onClick?: (event: MouseEvent) => void;
}

export const Row: CFC<Props> = ({children, className, onClick}) => {
  return (
    <div className={bem(main, className)} onClick={onClick}>
      {children}
    </div>
  );
};
