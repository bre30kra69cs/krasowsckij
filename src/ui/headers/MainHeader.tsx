import {CFC} from '../../types/react';
import styles from './MainHeader.module.scss';
import {InternalLinkButton} from '../links/InternalLinkButton';
import {useInter} from '../../inter';
import {capitalize} from '../../utils/capitalize';

export const MainHeader: CFC = () => {
  const {t} = useInter();

  return (
    <header className={styles.main}>
      <section className={styles.left}>123</section>
      <section className={styles.center}>
        <InternalLinkButton>{capitalize(t('home'))}</InternalLinkButton>
        <InternalLinkButton>{capitalize(t('about'))}</InternalLinkButton>
      </section>
      <section className={styles.right}>123</section>
    </header>
  );
};
