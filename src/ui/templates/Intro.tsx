import {useState, useCallback} from 'react';
import {css} from '@linaria/core';
import {CFC} from '../../types/react';
import {GrateText, main as textMain} from '../typography/GrateText';
import {Col} from '../boxs/Col';
import {unit, px} from '../../theme/units';
import {color} from '../../theme/palette';
import {bem} from '../../bem';
import {GITHUB, LINLEDIN, EMAIL} from '../../consts/links';
import {useInter} from '../../inter';
import {uppercase} from '../../utils/uppercase';

export const roboto = css`
  font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-style: normal;
  font-weight: bold;
`;

export const courierItalic = css`
  font-family: 'Courier New', Courier, monospace;
  font-style: italic;
  font-weight: bold;
`;

export const arialOblique = css`
  font-family: Arial, Helvetica, sans-serif;
  font-style: oblique;
  font-weight: bold;
`;

// TODO: exclude link component
const mainLink = css`
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

const ExternalLink: CFC<Props> = ({children, className, href = '', onMouseOver, onMouseLeave}) => {
  return (
    <a
      className={bem(mainLink, className)}
      href={href}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </a>
  );
};

const web = css`
  font-size: ${unit(8.4, px)};
`;

const reactCN = css`
  font-size: ${unit(4.8, px)};
`;

const matter = css`
  color: ${color('decoreShade')};
`;

const matterLight = css`
  color: ${color('decore')};
`;

const main = css`
  position: relative;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const background = css`
  position: absolute;
  height: 100%;
  width: 100%;
  background-position-x: center;
  background-repeat: no-repeat;

  &__none {
    opacity: 0;
    transition: 0.4s;
  }

  &__frontend {
    background-image: url(/frontend.jpg);
    opacity: 0.1;
    transition: 0.4s;
  }

  &__github {
    background-image: url(/github.svg);
    opacity: 0.1;
    transition: 0.4s;
  }

  &__email {
    background-image: url(/gmail.svg);
    opacity: 0.1;
    transition: 0.4s;
  }

  &__linkedin {
    background-image: url(/linkedin.svg);
    opacity: 0.1;
    transition: 0.4s;
  }

  &__react {
    background-image: url(/react.svg);
    opacity: 0.1;
    transition: 0.4s;
  }
`;

const box = css`
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const link = css`
  text-decoration: underline;
`;

type Background = 'none' | 'github' | 'email' | 'linkedin';

export const Intro: CFC = () => {
  const [status, setStatus] = useState<Background>('none');

  const {t} = useInter();

  const setGithub = useCallback(() => {
    setStatus('github');
  }, []);

  const setEmail = useCallback(() => {
    setStatus('email');
  }, []);

  const setLinkedin = useCallback(() => {
    setStatus('linkedin');
  }, []);

  const setNone = useCallback(() => {
    setStatus('none');
  }, []);

  return (
    <Col className={main}>
      <Col className={bem({[background]: {[status]: true}})} />
      <Col className={box}>
        <GrateText className={roboto}>
          {uppercase(t('intro:hello'))}{' '}
          <GrateText className={bem(roboto, matterLight)}>{uppercase(t('intro:name'))}</GrateText>
        </GrateText>
        <GrateText className={roboto}>
          {uppercase(t('intro:i'))}{' '}
          <GrateText className={bem(textMain, web, courierItalic, matterLight)}>
            {uppercase(t('intro:frontend'))}
          </GrateText>{' '}
          <GrateText className={bem(web, courierItalic)}>
            {uppercase(t('intro:developer'))}
          </GrateText>
        </GrateText>
        <GrateText className={bem(arialOblique, reactCN)}>
          {uppercase(t('intro:mytool'))}{' '}
          <GrateText className={bem(textMain, roboto, matterLight, reactCN)}>
            {uppercase(t('intro:react'))}
          </GrateText>
        </GrateText>
        <GrateText className={roboto}>
          {uppercase(t('intro:my'))}{' '}
          <GrateText className={bem(textMain, roboto, matter)}>
            <ExternalLink
              className={bem(textMain, roboto, matter, link)}
              href={GITHUB}
              onMouseOver={setGithub}
              onMouseLeave={setNone}
            >
              GITHUB
            </ExternalLink>
          </GrateText>{' '}
          <ExternalLink
            className={bem(textMain, roboto, matter, link)}
            href={EMAIL}
            onMouseLeave={setNone}
            onMouseOver={setEmail}
          >
            EMAIL
          </ExternalLink>{' '}
          {uppercase(t('intro:and'))}{' '}
          <GrateText className={bem(roboto, matter)}>
            <ExternalLink
              className={bem(textMain, roboto, matter, link)}
              href={LINLEDIN}
              onMouseLeave={setNone}
              onMouseOver={setLinkedin}
            >
              LINKEDIN
            </ExternalLink>
          </GrateText>
        </GrateText>
      </Col>
    </Col>
  );
};
