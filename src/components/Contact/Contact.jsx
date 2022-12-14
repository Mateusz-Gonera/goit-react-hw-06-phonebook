import styles from './Contact.module.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsSlice';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <>
      <span className={styles.paragraph}>
        {contact.name}: {contact.number}
      </span>
      <button
        type="button"
        className={styles.btn}
        onClick={() => handleDelete()}
      >
        Delete
      </button>
    </>
  );
};

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
};
