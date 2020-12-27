import {css} from '@linaria/core';
import {CFC} from '../types/react';
import {bem} from '../bem';
import {unit, px} from '../theme/units';
import {color} from '../theme/palette';

const main = css`
  position: relative;
  width: ${unit(7, px)};
  height: ${unit(4, px)};
`;

const slider = css`
  display: flex;
  flex-direction: row;
  align-items: center;

  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: ${unit(2, px)};
  padding: ${unit(0.5, px)};
  transition: 0.4s;

  &:before {
    content: url(/moon.svg);
    position: absolute;
    width: ${unit(3, px)};
    height: ${unit(3, px)};
    border-radius: ${unit(1.5, px)};
    transition: 0.4s;
  }

  &__major {
    background-color: ${color('majorLight')};
  }

  &__minor {
    background-color: ${color('minorLight')};
  }
`;

const checkbox = css`
  opacity: 0;
  width: 0;
  height: 0;

  &__major:checked + ${`.${slider}:before`} {
    content: url(/sun.svg);
    transform: translateX(${unit(3, px)});
  }

  &__minor:checked + ${`.${slider}:before`} {
    content: url(/sun.svg);
    transform: translateX(${unit(3, px)});
  }

  &__major:checked + .${slider} {
    background-color: ${color('decore')};
  }

  &__minor:checked + .${slider} {
    background-color: ${color('decore')};
  }
`;

export interface Props {
  type?: 'minor' | 'major';
  toggled?: boolean;
  onToggle?: () => void;
}

export const ToggleTheme: CFC<Props> = ({className, type = 'major', toggled, onToggle}) => {
  return (
    <label className={bem(main, className)}>
      <input
        className={bem({[checkbox]: {[type]: true}})}
        type="checkbox"
        defaultChecked={toggled}
        onChangeCapture={onToggle}
      />
      <span className={bem({[slider]: {[type]: true}})} />
    </label>
  );
};
