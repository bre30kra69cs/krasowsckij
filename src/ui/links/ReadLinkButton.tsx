import NextLink from 'next/link';
import {CFC} from '../../types/react';
import styles from './ReadLinkButton.module.scss';
import cn from 'classnames';
import {useInter} from '../../inter';
import {capitalize} from '../../utils/capitalize';
import {Chevron} from '../icons/Chevron';

interface Props {
  href?: string;
}

export const ReadLinkButton: CFC<Props> = ({className, href = ''}) => {
  const {t} = useInter();

  return (
    <NextLink href={href}>
      <a className={cn(styles.main, className)} href={href}>
        {capitalize(t('read'))}
        <Chevron />
      </a>
    </NextLink>
  );
};
