import styles from './ContactList.module.css';
import PropTypes from 'prop-types';
import { Contact } from 'components/Contact/Contact';

export const ContactList = ({ onDelete, filterArray }) => {
  return (
    <ul className={styles.list}>
      {filterArray().map(contact => (
        <li key={contact.id} className={styles.item}>
          <Contact onDelete={onDelete} contact={contact} />
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  onDelete: PropTypes.func.isRequired,
  filterArray: PropTypes.func.isRequired,
};
