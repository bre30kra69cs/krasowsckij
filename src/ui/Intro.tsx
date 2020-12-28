import {useState, useCallback} from 'react';
import {css} from '@linaria/core';
import {CFC} from '../types/react';
import {GrateText, main as textMain} from './GrateText';
import {Col} from './Col';
import {roboto, arialOblique, courierItalic} from '../cn/fonts';
import {unit, px} from '../theme/units';
import {color} from '../theme/palette';
import {bem} from '../bem';
import {ExternalLink} from './ExternalLink';
import {GITHUB, LINLEDIN, EMAIL} from '../consts/links';

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
          ПРИВЕТ! МЕНЯ ЗОВУТ <GrateText className={bem(roboto, matterLight)}>АНДРЕЙ</GrateText>
        </GrateText>
        <GrateText className={roboto}>
          Я{' '}
          <GrateText className={bem(textMain, web, courierItalic, matterLight)}>
            FRONT-END
          </GrateText>{' '}
          <GrateText className={bem(web, courierItalic)}>РАЗРАБОТЧИК</GrateText>
        </GrateText>
        <GrateText className={bem(arialOblique, reactCN)}>
          МОЙ ОСНОВНОЙ ИНСТРУМЕНТ ЭТО{' '}
          <GrateText className={bem(textMain, roboto, matterLight, reactCN)}>REACT.JS</GrateText>
        </GrateText>
        <GrateText className={roboto}>
          МОИ{' '}
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
          И{' '}
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
