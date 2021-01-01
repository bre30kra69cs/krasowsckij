import NextLink from 'next/link';
import {CFC} from '../../types/react';
import styles from './InternalLink.module.scss';
import cn from 'classnames';

interface Props {
  href?: string;
}

export const InternalLink: CFC<Props> = ({className, children, href = ''}) => {
  return (
    <NextLink href={href}>
      <a className={cn(styles.main, className)}>{children}</a>
    </NextLink>
  );
};
