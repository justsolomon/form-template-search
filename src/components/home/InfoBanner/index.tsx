import { ReactComponent as InfoIcon } from 'assets/vectors/info.svg';
import styles from './infoBanner.module.scss';

const InfoBanner = () => {
  return (
    <div className={styles['info-banner']}>
      <InfoIcon />
      <p className={styles['info-banner__text']}>
        Tada! Get started with a free template. Can't find what you are looking
        for? Search from the 1000+ available templates
      </p>
    </div>
  );
};

export default InfoBanner;
