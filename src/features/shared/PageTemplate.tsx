import {useState, useCallback} from 'react';
import {CFC} from '../../types/react';
import {Page} from '../../ui/Page';
import {MenuModal} from './MenuModal';

export const PageTemplate: CFC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onMenu = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const onCloseMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <>
      <Page onMenu={onMenu} />
      {isOpen && <MenuModal onClose={onCloseMenu} />}
    </>
  );
};
