import { ReactComponent as ErrorIcon } from 'assets/vectors/error.svg';
import { ReactComponent as RetryIcon } from 'assets/vectors/retry.svg';
import Button from '../Button';
import styles from './errorMessage.module.scss';

interface IErrorMessage {
  error: string;
  retryRequest: () => void;
}

function ErrorMessage({ retryRequest, error }: IErrorMessage) {
  return (
    <div className={styles['error-message']}>
      <ErrorIcon />
      <p
        className={styles['error-message__description']}
        data-testid="error-message__description"
      >
        {error === 'TypeError: Failed to fetch'
          ? 'Looks like you lost your connection. Please check it and try again'
          : error}
      </p>
      <Button
        leftIcon={<RetryIcon />}
        onClick={retryRequest}
        className={styles['error-message__button']}
      >
        Try again
      </Button>
    </div>
  );
}

export default ErrorMessage;
