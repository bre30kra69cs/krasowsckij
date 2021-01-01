import {CFC} from '../../types/react';
import styles from './Content.module.scss';
import cn from 'classnames';

export const Content: CFC = ({className, children}) => {
  return <section className={cn(styles.main, className)}>{children}</section>;
};
