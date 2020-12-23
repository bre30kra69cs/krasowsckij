import {css} from '@linaria/core';
import {CFC} from '../types/react';

const main = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  flex: 1 0 auto;
  min-height: 100%;
`;

export const Layout: CFC = ({children}) => {
  return <div className={main}>{children}</div>;
};
