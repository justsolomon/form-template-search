import { Template } from 'types/global';
import styles from './templateCard.module.scss';

const TemplateCard = ({ name, description, link }: Template) => {
  return (
    <li className={styles['template-card']}>
      <div className={styles['template-card__details']}>
        <h2 className={styles['template-card__header']}>{name}</h2>
        <p className={styles['template-card__description']}>{description}</p>
      </div>
      <div className={styles['template-card__footer']}>
        <a
          href={link}
          className={styles['template-card__footer__link']}
          target="_blank"
          rel="noopenner noreferrer"
        >
          Use Template
        </a>
      </div>
    </li>
  );
};

export default TemplateCard;
