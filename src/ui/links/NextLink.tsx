import {useMemo} from 'react';
import NextLinkBase from 'next/link';
import {CFC} from '../../types/react';
import {Routes, Options} from '../../types/routes';
import {route} from '../../hooks/use-router';
import {bem} from '../../bem';
import {LinkCN, Props as LinkCNProps} from './LinkCN';

export type Props = LinkCNProps & {
  path: keyof Routes;
  id?: string;
};

export const NextLink: CFC<Props> = ({children, className, path, id, active}) => {
  const options = useMemo(
    (): Options => ({
      id
    }),
    [id]
  );

  return (
    <NextLinkBase href={route(path, options)}>
      <a className={bem({[LinkCN]: {active}}, className)}>{children}</a>
    </NextLinkBase>
  );
};
