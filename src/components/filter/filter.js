import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filterSlice';

import css from './filter.module.css';

const Filter = () => {

  const dispatch = useDispatch();

  const [filter, setFilter] = useState('');

  useEffect(() => {
    dispatch(changeFilter(filter))
  }, [filter, dispatch]);

  const handleFilter = (e) => {
    e.preventDefault();

    const target = e.target;

    setFilter(target.value.trim().toLowerCase());
  }

  return (
    <div className={ css.container }>
      <h3>Find contacts by name</h3>
      <input
        className={ css.field }
        type='text'
        name='filter'
        value={ filter }
        onChange={ handleFilter }
      />
    </div>
  );
}

export default Filter;
