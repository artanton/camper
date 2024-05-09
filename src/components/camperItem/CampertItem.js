import { useDispatch } from 'react-redux';
import notFoundPic from '../../media/pictures/PhotoNotFound.png';
import { getCamper } from 'reduxFiles/camper/operators';
import symbolDefs from '../../media/pictures/icons/symbol-defs.svg';

import {
  Gearbox,
  BedSolid,
  Kitchen2,
  CamperButton,
  CamperButtons,
  CamperCard,
  CamperCardInfo,
  CamperDescription,
  CamperHeading,
  CamperRate,
  Poster,
  ShowMoreButton,
} from './CamperItemStyled';
import { FavoriteButton } from 'components/FavoriteButton/FavoriteBtn';

export const CamperItem = ({ camper }) => {
  const {
    _Id,
    gallery,
    name,
    price,
    rating,
    location,
    description,
    adults,
    engine,
    transmission,
    reviews,
    details: { kitchen, beds, airConditioner },
  } = camper;

  const dispatch = useDispatch();
  // const isActive = useSelector(state => state.favorites.includes(_Id));

  // const handleToggle = () => {
  //   dispatch(toggleFavorite(_Id));};

  return (
    <CamperCard>
      <Poster
        src={gallery[0] ? `${gallery[0]}` : `${notFoundPic}`}
        alt={name}
      />

      <CamperCardInfo>
        <div>
          <CamperHeading>
            <div>{name}</div>
            <div>
              €{price} <FavoriteButton itemId={_Id} />
            </div>
          </CamperHeading>
          <CamperRate>
            <span>
              {rating}({reviews.length} Reviews)
            </span>
            <span>{location}</span>
          </CamperRate>
        </div>

        <CamperDescription>{description}</CamperDescription>

        <CamperButtons>
          <li>
            {adults && (
              <CamperButton>
                <svg width="20" height="20">
                  <use href={`${symbolDefs}#icon-Adults`}></use>
                </svg>
                <span>{adults} adults</span>
              </CamperButton>
            )}
          </li>

          <li>
            {transmission && (
              <CamperButton>
                <Gearbox />
                <span>
                  {transmission.charAt(0).toUpperCase() + transmission.slice(1)}
                </span>
              </CamperButton>
            )}
          </li>

          <li>
            {engine && (
              <CamperButton>
                <svg width="20" height="20">
                  <use href={`${symbolDefs}#icon-Petrol`}></use>
                </svg>
                <span>{engine.charAt(0).toUpperCase() + engine.slice(1)}</span>
              </CamperButton>
            )}
          </li>

          <li>
            {kitchen && (
              <CamperButton>
                <Kitchen2 />
                <span>Kitchen</span>
              </CamperButton>
            )}
          </li>

          <li>
            {beds && (
              <CamperButton>
                <BedSolid />
                <span>{beds} beds</span>
              </CamperButton>
            )}
          </li>

          <li>
            {airConditioner && (
              <CamperButton>
                <svg width="23" height="16">
                  <use href={`${symbolDefs}#AC`}></use>
                </svg>
                <span>AC</span>
              </CamperButton>
            )}
          </li>
        </CamperButtons>

        <ShowMoreButton onClick={() => dispatch(getCamper(camper.id))}>
          <span>Show more</span>
        </ShowMoreButton>
      </CamperCardInfo>
    </CamperCard>
  );
};
