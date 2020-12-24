import {css} from '@linaria/core';
import {CFC} from '../types/react';
import {bem} from '../bem';

const main = css`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;

  & input {
    opacity: 0;
    width: 0;
    height: 0;
  }
`;

const slider = css`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 34px;

  &:before {
    position: absolute;
    content: '';
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }
`;

const checkbox = css`
  &:checked + ${slider} {
    background-color: #2196f3;
  }

  &:focus + ${slider} {
    box-shadow: 0 0 1px #2196f3;
  }

  &:checked + ${slider}:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
`;

export const Toggle: CFC = ({className}) => {
  return (
    <label className={bem(main, className)}>
      <input type={checkbox} />
      <span className={slider}></span>
    </label>
  );
};