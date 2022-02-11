import Input from 'components/global/Input';
import Select from 'components/global/Select';
import { ReactComponent as SearchIcon } from 'assets/vectors/search.svg';
import { TemplateCategory, TemplateOrder } from 'types/global';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import {
  resetPageState,
  search,
  sortByAlphabet,
  sortByDate,
  updateCategory,
} from 'redux/slices/templateSlice';
import styles from './formControls.module.scss';

const orderOptions: TemplateOrder[] = ['Default', 'Ascending', 'Descending'];

const FormControls = () => {
  const { searchQuery, filters } = useAppSelector((store) => store.template);
  const dispatch = useAppDispatch();

  return (
    <div className={styles['form-controls']}>
      <Input
        placeholder="Search Templates"
        rightIcon={<SearchIcon />}
        value={searchQuery}
        onChange={(e) => {
          dispatch(search(e.target.value));
          dispatch(resetPageState());
        }}
        containerClass={styles['form-controls__search']}
      />

      <div className={styles['form-controls__filters']}>
        <p className={styles['form-controls__filters__label']}>Sort By:</p>
        <div className={styles['form-controls__filters__selects']}>
          <Select
            label="Category"
            options={['All', 'Health', 'E-commerce', 'Education']}
            value={filters.category}
            onChange={(e) => {
              dispatch(updateCategory(e.target.value as TemplateCategory));
              dispatch(resetPageState());
            }}
          />
          <Select
            label="Order"
            options={orderOptions}
            value={filters.alphabetical}
            onChange={(e) => {
              dispatch(sortByAlphabet(e.target.value as TemplateOrder));
              dispatch(resetPageState());
            }}
          />
          <Select
            label="Date"
            options={orderOptions}
            value={filters.date}
            onChange={(e) => {
              dispatch(sortByDate(e.target.value as TemplateOrder));
              dispatch(resetPageState());
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default FormControls;
