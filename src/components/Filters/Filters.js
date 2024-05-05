// import { useDispatch, useSelector } from 'react-redux';
// import { FilterStyled } from './FiltersStyled';
// import { filtering } from 'reduxFiles/camper/FilterSlice';
// import { selectFilter } from 'reduxFiles/camper/selectors';

export const Filters = () => {
  // const dispatch = useDispatch();
  // const filter = useSelector(selectFilter);
  // return (
  //   <FilterStyled
  //     type="text"
  //     value={filter}
  //     onChange={evt => dispatch(filtering(evt.target.value))}
  //   />
  // );

  return (
    <>
      <aside>
        <div>
          <label>Location</label>
          <div>
            <input></input>
          </div>
        </div>
        <div>
          <h3>Filtrs</h3>
          <div>
            <div>
              <h4>Vehicle equipment</h4>
              <div>
                <button>AC</button>
                <button>Atomatic</button>
                <button>Kitchen</button>
                <button>TV</button>
                <button>Shower/WC</button>
              </div>
            </div>
            <div>
              <h4>Vehicle type</h4>
              <div>
                <button>Van</button>
                <button>Fully Integrated</button>
                <button>Alcove</button>
                
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};
