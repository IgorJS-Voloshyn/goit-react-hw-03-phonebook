import PropTypes from 'prop-types';
import css from './ContactList.module.css';

export function ContactList({ contacts, del }) {
  return (
    <ul className={css.list}>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id} className={css.list_item}>
            {name}: <span>{number}</span>
            <button type="button" onClick={() => del(id)} className={css.btn}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}

ContactList.prototype = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  del: PropTypes.func.isRequired,
};
