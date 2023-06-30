import React from 'react';
import PropTypes from 'prop-types';
import css from './Filter.module.css';

export function Filter({ onChange, value }) {
  return (
    <div>
      <label className={css.label}>
        Find contacts by name:
        <input
          className={css.input}
          onChange={onChange}
          type="text"
          name="filter"
          value={value}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
    </div>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
