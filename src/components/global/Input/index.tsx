import styles from './input.module.scss';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  leftIcon?: string | React.ReactNode;
  rightIcon?: string | React.ReactNode;
  containerClass?: string;
}

const Input = ({
  leftIcon,
  rightIcon,
  containerClass,
  ...rest
}: InputProps) => {
  return (
    <div className={`${styles['input-group']} ${containerClass}`}>
      {leftIcon ? (
        <div className={styles['input-group__left-element']}>{rightIcon}</div>
      ) : null}

      <input
        className={`${styles['input-group__input']} ${
          leftIcon ? styles['input-group__input--has-left'] : ''
        } ${rightIcon ? styles['input-group__input--has-right'] : ''}`}
        {...rest}
      />

      {rightIcon ? (
        <div className={styles['input-group__right-element']}>{rightIcon}</div>
      ) : null}
    </div>
  );
};

export default Input;
