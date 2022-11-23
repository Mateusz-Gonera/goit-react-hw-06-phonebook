import styles from './ContactList.module.css';
import PropTypes from 'prop-types';
import { Contact } from 'components/Contact/Contact';
import { useSelector } from 'react-redux';
import { getItems } from 'redux/contacts/selectors';

export const ContactList = ({ filterArray }) => {
  const items = useSelector(getItems);

  return (
    <ul className={styles.list}>
      {filterArray().map(contact => (
        <li key={contact.id} className={styles.item}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  filterArray: PropTypes.func.isRequired,
};
