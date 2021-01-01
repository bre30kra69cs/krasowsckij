import {CFC} from '../../types/react';
import styles from './Col.module.css';
import {bem} from '../../bem';

export const Row: CFC = ({className, children}) => {
  return <div className={bem(styles.main, className)}>{children}</div>;
};
