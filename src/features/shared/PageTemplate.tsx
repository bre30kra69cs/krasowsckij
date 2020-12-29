import {css} from '@linaria/core';
import {useState, useCallback} from 'react';
import {CFC} from '../../types/react';
import {Page} from '../../ui/Page';
import {MenuModal} from './MenuModal';
import {bem} from '../../bem';
import {Layout} from './Layout';

const main = css`
  max-height: 100%;
  overflow: hidden;
`;

export const PageTemplate: CFC = ({children, className}) => {
  const [isOpen, setIsOpen] = useState(false);

  const onMenu = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const onCloseMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <Layout className={bem(isOpen && main)}>
      <Page onMenu={onMenu} className={className}>
        {children}
      </Page>
      {isOpen && <MenuModal onClose={onCloseMenu} />}
    </Layout>
  );
};
