import {CFC} from '../../types/react';
import styles from './Title.module.scss';
import cn from 'classnames';

export const Title: CFC = ({className, children}) => {
  return <span className={cn(styles.main, className)}>{children}</span>;
};
