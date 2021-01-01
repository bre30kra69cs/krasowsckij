import {CFC} from '../../types/react';
import {MainHeader} from '../../ui/headers/MainHeader';
import {MainLayout} from '../../ui/layouts/MainLayout';
import {Content} from '../../ui/layouts/Content';

export const MainTemplate: CFC = ({className, children}) => {
  return (
    <MainLayout className={className}>
      <MainHeader />
      <Content>{children}</Content>
    </MainLayout>
  );
};
