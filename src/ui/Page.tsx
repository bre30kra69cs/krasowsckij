import {css} from '@linaria/core';
import {CFC} from '../types/react';
import {color} from '../theme/palette';
import {Header, Props as HeaderProps, HEIGHT} from './Header';
import {Col} from './Col';
import {bem} from '../bem';
import {px} from '../theme/units';

const main = css`
  flex: 1 0 auto;
  background-color: ${color('majorShade')};
  margin-top: ${px(HEIGHT)};
`;

type Props = HeaderProps;

export const Page: CFC<Props> = ({children, className, onMenu}) => {
  return (
    <>
      <Header onMenu={onMenu} />
      <Col className={bem(main, className)}>{children}</Col>
    </>
  );
};
