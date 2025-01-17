import PropTypes from 'prop-types';
import { MdDeleteForever } from 'react-icons/md';
import { List, Item } from './ContactList.styled';

export function ContactList({ contacts, onClick }) {
  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <Item key={id}>
          <p>
            {name}: {number}
          </p>
          <button type="button" onClick={() => onClick(id)}>
            <MdDeleteForever size={20} />
          </button>
        </Item>
      ))}
    </List>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  onClick: PropTypes.func.isRequired,
};
