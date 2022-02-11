import styles from './homeLayout.module.scss';

interface HomeLayoutProps {
  children: React.ReactNode;
}

const HomeLayout = ({ children }: HomeLayoutProps) => {
  return <div className={styles['home']}>{children}</div>;
};

export default HomeLayout;
