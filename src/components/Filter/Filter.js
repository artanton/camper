import { useDispatch, useSelector } from 'react-redux';
import { FilterStyled } from './FilterStyled';
import { filtering } from 'reduxFiles/cont/FilterSlice';
import { selectFilter } from 'reduxFiles/cont/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  return (
    <FilterStyled
      type="text"
      value={filter}
      onChange={evt => dispatch(filtering(evt.target.value))}
    />
  );
};