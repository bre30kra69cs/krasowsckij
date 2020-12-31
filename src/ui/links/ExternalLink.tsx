import {CFC} from '../../types/react';
import {TitleText, Props as TitleTextProps} from '../typography/TitleText';
import {bem} from '../../bem';
import {LinkCN, Props as LinkCNProps} from './LinkCN';

type Props = LinkCNProps &
  TitleTextProps & {
    path: string;
  };

export const ExternalLink: CFC<Props> = ({children, className, path, size, active}) => {
  return (
    <a href={path} className={bem({[LinkCN]: {active}}, className)}>
      <TitleText size={size}>{children}</TitleText>
    </a>
  );
};
