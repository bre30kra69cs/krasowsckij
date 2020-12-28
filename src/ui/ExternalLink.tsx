import {css} from '@linaria/core';
import {CFC} from '../types/react';
import {color} from '../theme/palette';
import {bem} from '../bem';

const main = css`
  text-decoration: none;
  outline: none;

  @keyframes hovering {
    from {
    }
    to {
      color: ${color('decoreDark')};
    }
  }

  &:hover {
    color: ${color('decoreDark')};
    animation-name: hovering;
    animation-duration: 0.4s;
  }
`;

interface Props {
  href?: string;
  onMouseOver?: () => void;
  onMouseLeave?: () => void;
}

export const ExternalLink: CFC<Props> = ({
  children,
  className,
  href = '',
  onMouseOver,
  onMouseLeave
}) => {
  return (
    <a
      className={bem(main, className)}
      href={href}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </a>
  );
};
