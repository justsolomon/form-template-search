import { Template } from 'types/global';
import TemplateCard from '../TemplateCard';
import styles from './templateCardList.module.scss';

interface TemplateCardListProps {
  templates: Template[];
}

const TemplateCardList = ({ templates }: TemplateCardListProps) => {
  return (
    <ul
      className={styles['template-card-list']}
      data-testid="template-card-list"
    >
      {templates.map((template, index) => (
        <TemplateCard {...template} key={index} />
      ))}
    </ul>
  );
};

export default TemplateCardList;
