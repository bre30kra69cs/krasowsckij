import {CFC} from '../../types/react';

export interface Props {
  src?: string;
}

export const Image: CFC<Props> = ({className, src}) => {
  return <img className={className} src={src} />;
};
