import { ReactComponent as DropdownIcon } from 'assets/vectors/arrow-down.svg';
import styles from './select.module.scss';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: string[];
}

const Select = ({ label, options, ...rest }: SelectProps) => {
  return (
    <div className={styles['select-group']}>
      <label className={styles['select-group__label']}>{label}</label>
      <select className={styles['select-group__select']} {...rest}>
        {options.map((option) => {
          return <option value={option}>{option}</option>;
        })}
      </select>

      <div className={styles['select-group__dropdown-icon']}>
        <DropdownIcon />
      </div>
    </div>
  );
};

export default Select;
