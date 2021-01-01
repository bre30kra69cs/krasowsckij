import {CFC} from '../../types/react';
import styles from './Text.module.scss';
import cn from 'classnames';

export const Text: CFC = ({className, children}) => {
  return <span className={cn(styles.main, className)}>{children}</span>;
};
