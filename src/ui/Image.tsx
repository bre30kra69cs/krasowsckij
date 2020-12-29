import {CFC} from '../types/react';

interface Props {
  src?: string;
}

export const Image: CFC<Props> = ({className, src}) => {
  return <img className={className} src={src} />;
};
