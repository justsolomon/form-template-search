import { Template } from 'types/global';
import TemplateCard from '../TemplateCard';
import styles from './templateCardList.module.scss';

interface TemplateCardListProps {
  templates: Template[];
}

const TemplateCardList = ({ templates }: TemplateCardListProps) => {
  return (
    <ul className={styles['template-card-list']}>
      {templates.map((template) => (
        <TemplateCard {...template} />
      ))}
    </ul>
  );
};

export default TemplateCardList;
