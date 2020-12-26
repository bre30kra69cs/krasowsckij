import {css} from '@linaria/core';
import {CFC} from '@app/types';
import {bem} from '@app/bem';

const main = css`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export const Row: CFC = ({children, className}) => {
  return <div className={bem(main, className)}>{children}</div>;
};
