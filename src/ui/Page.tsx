import {css} from '@linaria/core';
import {CFC} from '../types/react';
import {color} from '../theme/palette';
import {Header} from './Header';
import {Col} from './Col';

const content = css`
  flex: 1 0 auto;
  background-color: ${color('major')};
`;

export const Page: CFC = ({children}) => {
  return (
    <>
      <Header />
      <Col className={content}>{children}</Col>
    </>
  );
};
