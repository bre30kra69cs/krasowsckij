import {CFC} from '../../types/react';
import styles from './Col.module.css';
import {bem} from '../../bem';

export const Col: CFC = ({className, children, style}) => {
  return (
    <div style={style} className={bem(styles.main, className)}>
      {children}
    </div>
  );
};
