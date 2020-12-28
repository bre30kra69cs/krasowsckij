import {CFC} from '../../types/react';
import {PageTemplate} from '../shared/PageTemplate';
import {Intro} from '../../ui/Intro';

export const HomePage: CFC = () => {
  return (
    <PageTemplate>
      <Intro />
    </PageTemplate>
  );
};
