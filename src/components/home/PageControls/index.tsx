import Button from 'components/global/Button';
import { ReactComponent as ArrowIcon } from 'assets/vectors/arrow-right.svg';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { goToPage } from 'redux/slices/templateSlice';
import styles from './pageControls.module.scss';

const PageControls = () => {
  const { currentPage, prevPage, nextPage, numOfPages } = useAppSelector(
    (store) => store.template.pagination,
  );
  const dispatch = useAppDispatch();

  return numOfPages ? (
    <div className={styles['page-controls']}>
      <Button
        variant="transparent"
        leftIcon={prevPage ? <ArrowIcon /> : null}
        onClick={() => {
          dispatch(goToPage('prev'));
        }}
        className={styles['page-controls__prev-button']}
      >
        Previous
      </Button>

      <div className={styles['page-controls__page-info']}>
        <span className={styles['page-controls__current-page']}>
          {currentPage}
        </span>{' '}
        of {numOfPages}
      </div>

      <Button
        variant="transparent"
        rightIcon={nextPage ? <ArrowIcon /> : null}
        onClick={() => {
          dispatch(goToPage('next'));
        }}
        className={styles['page-controls__next-button']}
      >
        Next
      </Button>
    </div>
  ) : null;
};

export default PageControls;
