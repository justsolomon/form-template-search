import Spinner from '../Spinner';
import styles from './button.module.scss';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Classname to apply to button to override default styles */
  className?: string;

  /** Boolean showing the loading state of the button */
  isLoading?: boolean;

  /** Boolean showing the disabled state of the button */
  isDisabled?: boolean;

  /** Determines if the button is an icon button */
  iconButton?: boolean;

  /** Variant of the button. Defaults to `solid` */
  variant?: 'solid' | 'ghost' | 'transparent';

  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children: React.ReactNode;
}

function Button({
  isDisabled,
  isLoading,
  children,
  className = '',
  iconButton,
  variant = 'solid',
  leftIcon,
  rightIcon,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={`${styles['button']} ${className} ${
        styles['button--' + variant]
      } ${iconButton ? styles['button--icon'] : ''} ${
        isLoading ? styles['button--loading'] : ''
      }`}
      disabled={isDisabled || isLoading}
      data-testid="button"
      {...rest}
    >
      {leftIcon ? (
        <span className={styles['button__left-icon']}>{leftIcon}</span>
      ) : null}

      <>
        {isLoading ? (
          <Spinner size="24px" color="#ffffff" data-testid="button__spinner" />
        ) : (
          children
        )}
      </>

      {rightIcon ? (
        <span className={styles['button__right-icon']}>{rightIcon}</span>
      ) : null}
    </button>
  );
}

export default Button;
