import {CFC} from '../types/react';

export const ChevronIcon: CFC = ({className}) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      version="1.2"
      baseProfile="tiny"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path d="M8.586 5.586a2 2 0 0 0 0 2.828L12.171 12l-3.585 3.586a2 2 0 1 0 2.828 2.828L17.829 12l-6.415-6.414a2 2 0 0 0-2.828 0z" />
    </svg>
  );
};
