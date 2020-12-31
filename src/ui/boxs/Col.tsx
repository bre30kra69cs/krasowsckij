import {MouseEvent} from 'react';
import {css} from '@linaria/core';
import {CFC} from '../../types/react';
import {bem} from '../../bem';

const col = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export interface Props {
  onClick?: (event?: MouseEvent) => void;
}

export const Col: CFC<Props> = ({children, className, dangerouslySetInnerHTML, onClick}) => {
  return (
    <div
      className={bem(col, className)}
      onClick={onClick}
      dangerouslySetInnerHTML={dangerouslySetInnerHTML}
    >
      {children}
    </div>
  );
};
