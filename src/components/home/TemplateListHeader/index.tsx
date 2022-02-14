import { TemplateCategory } from 'types/global';
import styles from './templateListHeader.module.scss';

interface TemplateListHeaderProps {
  category: 'All' | TemplateCategory;
  numOfTemplates: number;
}

const TemplateListHeader = ({
  category,
  numOfTemplates,
}: TemplateListHeaderProps) => {
  return (
    <div className={styles['list-header']}>
      <h1
        className={styles['list-header__title']}
      >{`${category} Templates`}</h1>

      <p
        className={styles['list-header__templates-number']}
      >{`${numOfTemplates} templates`}</p>
    </div>
  );
};

export default TemplateListHeader;
