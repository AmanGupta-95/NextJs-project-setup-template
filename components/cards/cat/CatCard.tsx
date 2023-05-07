import styles from './CatCard.module.css'

export interface ICatCard {}

const CatCard: React.FC<ICatCard> = () => {
  return <div className={styles.container}>Hello world!</div>;
};

export default CatCard;
