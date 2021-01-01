import {MouseEvent} from 'react';
import {css} from '@linaria/core';
import {CFC} from '../../types/react';
import {bem} from '../../bem';

const template = `
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const col = css`
  ${template}
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

export const ColStyles = {
  template,
  col
};
