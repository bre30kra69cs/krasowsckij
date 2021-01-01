import flags from '../../flags.json';
import {Flags} from '../types/flags';

const createFlagsManager = () => {
  const get = (): Flags => {
    return flags;
  };

  return {
    get
  };
};

export const flagsManager = createFlagsManager();
