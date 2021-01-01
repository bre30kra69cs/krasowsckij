import {CFC} from '../../types/react';
import {MainHeader} from '../../ui/headers/MainHeader';
import {MainLayout} from '../../ui/layouts/MainLayout';

export const MainTemplate: CFC = () => {
  return (
    <MainLayout>
      <MainHeader />
    </MainLayout>
  );
};
