import {CFC} from '../../types/react';
import styles from './PreviewCard.module.scss';
import {useInter} from '../../inter';
import cn from 'classnames';
import {InternalLink} from '../links/InternalLink';
import {ColLine} from '../boxes/ColLine';
import {Preview} from '../../types/data';
import {ImageCard} from '../images/ImageCard';
import {Text} from '../typography/Text';
import {ReadLinkButton} from '../links/ReadLinkButton';

interface Props {
  preview: Preview;
}

export const PreviewCard: CFC<Props> = ({className, preview}) => {
  const {lng} = useInter();

  const {defaultLng} = preview;
  const content = preview[lng] ?? preview[defaultLng];

  return (
    <article className={cn(styles.main, className)}>
      <ColLine gap="m">
        <InternalLink>{content.title}</InternalLink>
        <ImageCard src={content.image} />
        <Text className={styles.text}>{content.preview}</Text>
        <ReadLinkButton className={styles.link} />
      </ColLine>
    </article>
  );
};
