import {useState, useCallback} from 'react';
import {CFC} from '../../types/react';
import {Page} from '../../ui/templates/Page';
import {MenuModal} from './MenuModal';
import {Layout} from './Layout';
import {useOverflow} from '../../hooks/use-overflow';

export const PageTemplate: CFC = ({children, className}) => {
  const [isOpen, setIsOpen] = useState(false);

  const onMenu = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const onCloseMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  useOverflow(isOpen);

  return (
    <Layout>
      <Page onMenu={onMenu} className={className}>
        {children}
      </Page>
      {isOpen && <MenuModal onClose={onCloseMenu} />}
    </Layout>
  );
};
