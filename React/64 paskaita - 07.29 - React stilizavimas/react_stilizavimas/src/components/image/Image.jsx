import styles from './Image.module.css';

const Image = ({ url, name }) => {
  return (
    <img 
      className={styles.paveiksliukas}
      src={url}
      alt={name}
    />
  );
}
 
export default Image;