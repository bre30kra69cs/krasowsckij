import {CFC} from '../../types/react';
import styles from './MainLayout.module.scss';
import cn from 'classnames';

export const MainLayout: CFC = ({className, children}) => {
  return <main className={cn(styles.main, className)}>{children}</main>;
};
