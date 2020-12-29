import {CFC} from '../../types/react';
import {PageTemplate} from '../shared/PageTemplate';
import {Intro} from '../../ui/Intro';
import {useViewType} from '../../hooks/use-view-type';

export const AboutPage: CFC = () => {
  useViewType();

  return (
    <PageTemplate>
      <Intro />
    </PageTemplate>
  );
};
