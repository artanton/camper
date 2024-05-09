import symbolDefs from '../../media/pictures/icons/symbol-defs.svg';
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
              <ul>
                <li>
                  <button>
                    <svg width="32" height="32">
                      <use href={`${symbolDefs}#AC`}></use>
                    </svg>
                    <span>AC</span></button>
                </li>
                <li>
                  <button>
                    <svg width="32" height="32">
                      <use href={`${symbolDefs}#icon-Transmission`}></use>
                    </svg>
                    <span>Atomatic</span></button>
                </li>
                <li>
                  <button>
                    <svg width="32" height="32">
                      <use href={`${symbolDefs}#icon-Kitchen`}></use>
                    </svg>
                    <span>Kitchen</span></button>
                </li>
                <li>
                  <button>
                    <svg width="32" height="32">
                      <use href={`${symbolDefs}#icon-TV`}></use>
                    </svg>
                    <span>TV</span></button>
                </li>
                <li>
                  <button>
                    <svg width="32" height="32">
                      <use href={`${symbolDefs}#icon-Shower`}></use>
                    </svg>
                    <span>Shower/WC</span></button>
                </li>
              </ul>
            </div>
            <div>
              <h4>Vehicle type</h4>
              <ul>
                <li>
                  <button>
                    <svg width="40" height="28">
                      <use href={`${symbolDefs}#icon-Van`}></use>
                    </svg>
                    <span>Van</span>
                  </button>
                </li>
                <li>
                  <button>
                    <svg width="40" height="28">
                      <use href={`${symbolDefs}#icon-FullyInegrated`}></use>
                    </svg>
                    <span>Fully Integrated</span>
                  </button>
                </li>
                <li>
                  <button>
                    <svg width="40" height="28">
                      <use href={`${symbolDefs}#icon-Alcove`}></use>
                    </svg>
                    <span>Alcove</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};
