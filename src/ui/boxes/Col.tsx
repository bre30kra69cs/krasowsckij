import {CFC} from '../../types/react';
import styles from './Col.module.scss';
import cn from 'classnames';

export const Col: CFC = ({className, children}) => {
  return <div className={cn(styles.main, className)}>{children}</div>;
};
