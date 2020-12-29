import {css} from '@linaria/core';
import {CFC} from '../types/react';
import {ChevronIcon} from './ChevronIcon';
import {InternalLink, Props as InternalLinkProps} from './InternalLink';
import {Row} from './Row';
import {useInter} from '../inter';
import {color} from '../theme/palette';
import {bem} from '../bem';

const main = css`
  fill: ${color('minor')};
  align-items: center;

  &:hover {
    fill: ${color('decore')};
    transition: 0.4s;

    & a {
      color: ${color('decore')};
      transition: 0.4s;
    }
  }
`;

type Props = InternalLinkProps;

export const ReadLink: CFC<Props> = ({className, path}) => {
  const {t} = useInter();

  return (
    <Row className={bem(main, className)}>
      <InternalLink path={path}>{t('read')}</InternalLink>
      <ChevronIcon />
    </Row>
  );
};
