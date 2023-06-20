import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Filter.module.css';

export class Filter extends Component {
  state = { filter: '' };

  handleChange = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    return (
      <div>
        <label className={css.label}>
          Find contacts by name:
          <input
            className={css.input}
            onChange={this.handleChange}
            type="text"
            name="filter"
            value={this.state.filter}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        {this.state.filter !== '' ? (
          <ul className={css.list}>
            {this.props.contacts
              .filter(value =>
                value.name
                  .toUpperCase()
                  .includes(this.state.filter.toUpperCase())
              )
              .map(({ id, name, number }) => {
                return (
                  <li key={id}>
                    {name}: <span>{number}</span>
                  </li>
                );
              })}
          </ul>
        ) : null}
      </div>
    );
  }
}

Filter.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};
