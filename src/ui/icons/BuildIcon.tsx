import {CFC} from '../../types/react';

export const BuildIcon: CFC = ({className}) => {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12.09 2.91C10.08 0.9 7.07 0.49 4.65 1.67L8.99 6.01L5.99 9.01L1.65 4.67C0.480003 7.1 0.890003 10.09 2.9 12.1C4.76 13.96 7.48 14.45 9.79 13.58L18.9 22.69C19.29 23.08 19.92 23.08 20.31 22.69L22.61 20.39C23 20 23 19.37 22.61 18.98L13.54 9.9C14.46 7.56 13.98 4.8 12.09 2.91Z" />
    </svg>
  );
};
