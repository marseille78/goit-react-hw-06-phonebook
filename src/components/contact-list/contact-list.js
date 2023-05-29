import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, getUsersList } from '../../redux/contactsSlice';
import { getFilterSelector } from '../../redux/filterSlice';
import css from './contact-list.module.css';

const ContactList = () => {

  const dispatch = useDispatch();
  const list = useSelector(getUsersList);
  const filter = useSelector(getFilterSelector);

  const getVisibleItems = () => {
    return list.filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()));
  }

  const listContacts = getVisibleItems().map(({id, name, number}) => {
    return (
      <li key={id} className={css.item}>
        {name}: <span className={css.value}>{number}</span>
        <button
          className={css.btn}
          type="button"
          onClick={() => dispatch(deleteUser(id))}
        >
          Delete
        </button>
      </li>
    );
  });

  return (
    <ul>
      { listContacts }
    </ul>
  );
};

export default ContactList;
