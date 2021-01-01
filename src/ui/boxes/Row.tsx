import {CFC} from '../../types/react';
import styles from './Row.module.scss';
import cn from 'classnames';

export const Row: CFC = ({className, children}) => {
  return <div className={cn(styles.main, className)}>{children}</div>;
};
