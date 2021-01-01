import {CFC} from '../../types/react';
import styles from './Image.module.scss';
import cn from 'classnames';

interface Props {
  src?: string;
}

export const Image: CFC<Props> = ({className, children, src = ''}) => {
  return (
    <img src={src} className={cn(styles.main, className)}>
      {children}
    </img>
  );
};
