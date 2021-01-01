import NextLink from 'next/link';
import {CFC} from '../../types/react';
import styles from './InternalLinkButton.module.scss';
import cn from 'classnames';

interface Props {
  href?: string;
}

export const InternalLinkButton: CFC<Props> = ({className, children, href = ''}) => {
  return (
    <NextLink href={href}>
      <a className={cn(styles.main, className)} href={href}>
        {children}
      </a>
    </NextLink>
  );
};
