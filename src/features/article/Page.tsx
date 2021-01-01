import {useMemo} from 'react';
import {CFC} from '../../types/react';
import {PageTemplate} from '../shared/PageTemplate';
import {Article} from '../../types/data';
import {css} from '@linaria/core';
import {bem} from '../../bem';
import {unit, px} from '../../theme/units';
import {color} from '../../theme/palette';
import {useViewType} from '../../hooks/use-view-type';
import {Col} from '../../ui/boxs/Col';
import {MainTextStyles} from '../../ui/typography/MainText';
import {TitleTextStyles} from '../../ui/typography/TitleText';
import {CodeTextStyles} from '../../ui/typography/CodeText';
import {LinkAncherCN} from '../../ui/links/LinkCN';
import {CodeStyles} from '../../ui/codes/Code';
import {BorderStyles} from '../../ui/cards/Border';

const articlePage = css`
  align-items: center;
  padding-top: ${unit(6, px)};
  padding-bottom: ${unit(20, px)};
`;

const articlePageContent = css`
  max-width: ${unit(150, px)};

  & hr {
    width: 100%;
    margin-bottom: ${unit(3, px)};
  }

  & #image {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${color('minorDark')};
    ${BorderStyles.template};
  }

  & h1 {
    ${TitleTextStyles.main}
    ${TitleTextStyles.m}
    margin-bottom: ${unit(3, px)};
  }

  & h4 {
    ${TitleTextStyles.main}
    ${TitleTextStyles.s}
    margin-bottom: ${unit(2, px)};
  }

  & p {
    ${MainTextStyles.main}
    ${MainTextStyles.s}
    margin-bottom: ${unit(3, px)};
    text-align: justify;
  }

  & ol {
    margin-bottom: ${unit(2, px)};
  }

  & li {
    &:before {
      content: '- ';
    }

    ${MainTextStyles.main}
    ${MainTextStyles.s}
    margin-bottom: ${unit(1, px)};
  }

  & a {
    ${MainTextStyles.main}
    ${MainTextStyles.s}
    ${LinkAncherCN}
  }

  & pre {
    ${CodeTextStyles.main}
    ${CodeTextStyles.s}
    ${CodeStyles.template}
    margin-bottom: ${unit(3, px)};
  }
`;

interface Props {
  article: Article;
}

export const ArticlePage: CFC<Props> = ({className, article}) => {
  useViewType();

  const html = useMemo(() => {
    return {__html: article};
  }, [article]);

  return (
    <PageTemplate className={bem(articlePage, className)}>
      <Col className={articlePageContent} dangerouslySetInnerHTML={html} />
    </PageTemplate>
  );
};
