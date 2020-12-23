import {css} from '@linaria/core';
import {CFC} from '../types/react';
import {unit, color} from '../design';
import {Row} from './Row';
import {Link} from './Link';

const main = css`
  height: ${unit(5)}px;
  background-color: ${color('gray')};
  justify-content: center;
`;

const link = css`
  padding: 0 ${unit(3)}px;
`;

export const Header: CFC = () => {
  return (
    <Row className={main}>
      <Link className={link}>Home</Link>
      <Link className={link}>Articles</Link>
    </Row>
  );
};
