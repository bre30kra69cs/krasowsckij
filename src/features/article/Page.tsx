import {CFC} from '../../types/react';
import {PageTemplate} from '../shared/PageTemplate';
import {Article} from '../../types/data';
import {css} from '@linaria/core';
import {bem} from '../../bem';
import {unit, px} from '../../theme/units';
import {useViewType} from '../../hooks/use-view-type';
import {Col} from '../../ui/Col';
import {mainInner as titleInner} from '../../ui/Title';
import {mainInner as textInner} from '../../ui/Text';
import {mainInner as externalInner} from '../../ui/ExternalLink';
import {color} from '../../theme/palette';

const main = css`
  align-items: center;
  padding-top: ${unit(6, px)};
  padding-bottom: ${unit(20, px)};
`;

const content = css`
  ${textInner}
  max-width: ${unit(150, px)};
  align-items: stretch;
  color: ${color('minorShade')};

  & hr {
    width: 100%;
    margin: ${unit(4, px)} 0;
  }

  & h1 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    & img {
      align-self: center;
    }
  }

  & {
    h1 {
      ${titleInner}
      margin: ${unit(4, px)} 0;
    }

    h2 {
      ${titleInner}
      margin: ${unit(2, px)} 0;
    }

    h3 {
      ${titleInner}
      font-size: ${unit(2.5, px)};
      margin: ${unit(1, px)} 0;
    }

    h4 {
      ${titleInner}
      font-size: ${unit(2.5, px)};
      margin: ${unit(1, px)} 0;
    }

    h5 {
      ${titleInner}
      font-size: ${unit(2.5, px)};
      margin: ${unit(0.5, px)} 0;
    }

    h6 {
      ${titleInner}
      font-size: ${unit(2.5, px)};
      margin: ${unit(0.5, px)} 0;
    }

    a {
      ${externalInner}
      font-size: ${unit(2.5, px)};
    }

    pre {
      margin: ${unit(3, px)} 0;
      padding: ${unit(3, px)};
      background-color: ${color('majorDark')};
      border-radius: ${unit(2, px)};
      font-size: ${unit(2, px)};
      overflow: hidden;
      font-family: 'Courier New', Courier, monospace;
    }

    li:before {
      content: '- ';
    }

    li {
      margin: 0 0 ${unit(1, px)} 0;
    }

    ol {
      padding: ${unit(3, px)} 0;
    }

    em {
      font-style: italic;
    }
  }
`;

interface Props {
  article: Article;
}

export const ArticlePage: CFC<Props> = ({className, article}) => {
  useViewType();

  return (
    <PageTemplate className={bem(main, className)}>
      <Col className={content} dangerouslySetInnerHTML={{__html: article}} />
    </PageTemplate>
  );
};
