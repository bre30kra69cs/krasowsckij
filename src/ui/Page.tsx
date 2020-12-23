import {css} from '@linaria/core';
import {CFC} from '../types/react';
import {Col} from './Col';
import {Header} from './Header';

const content = css`
  flex: 1 0 auto;
`;

export const Page: CFC = ({children}) => {
  return (
    <>
      <Header />
      <Col className={content}>{children}</Col>
    </>
  );
};
