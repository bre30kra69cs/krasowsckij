import {CFC} from '../../types/react';
import {TitleText, Props as TitleTextProps} from '../typography/TitleText';
import {NextLink, Props as NextLinkProps} from './NextLink';

export type Props = NextLinkProps & TitleTextProps;

export const InternalLink: CFC<Props> = ({size, children, ...rest}) => {
  return (
    <NextLink {...rest}>
      <TitleText size={size}>{children}</TitleText>
    </NextLink>
  );
};
