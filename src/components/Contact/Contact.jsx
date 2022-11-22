import styles from './Contact.module.css';
import PropTypes from 'prop-types';

export const Contact = ({ contact, onDelete }) => {
  return (
    <>
      <span className={styles.paragraph}>
        {contact.name}: {contact.number}
      </span>
      <button
        type="button"
        className={styles.btn}
        onClick={() => onDelete(contact.id)}
      >
        Delete
      </button>
    </>
  );
};

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
};
