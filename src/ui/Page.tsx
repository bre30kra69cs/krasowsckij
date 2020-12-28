import {css} from '@linaria/core';
import {CFC} from '../types/react';
import {color} from '../theme/palette';
import {Header, Props as HeaderProps} from './Header';
import {Col} from './Col';
import {bem} from '../bem';

const content = css`
  flex: 1 0 auto;
  background-color: ${color('majorShade')};
`;

type Props = HeaderProps;

export const Page: CFC<Props> = ({children, className, onMenu}) => {
  return (
    <>
      <Header onMenu={onMenu} />
      <Col className={bem(content, className)}>{children}</Col>
    </>
  );
};
