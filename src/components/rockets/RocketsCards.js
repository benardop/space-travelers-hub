import React from 'react';
import '../stylesheets/RocketsCards.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveRocket, cancelRocket } from '../../redux/rockets/RocketsSlice';

function RocketsCards({ rocket }) {
  const dispatch = useDispatch();

  const {
    rocketId, rocketName, rocketDesc, rocketImg, rocketReserved,
  } = rocket;

  const reserveHandler = (e) => {
    const data = e.target.id;
    dispatch(reserveRocket(data));
  };

  const cancelHandler = (e) => {
    const data = e.target.id;
    dispatch(cancelRocket(data));
  };

  return (
    <section className="rocketCard">
      <img className="rocketImg" src={rocketImg} alt="" srcSet="" />
      <div className="rocketDesc">
        <h1 className="titleDesc">{rocketName}</h1>
        <p className="paraDesc">
          {rocketReserved === true && (<span className="rocketReserved">Reserved</span>)}
          {rocketDesc}
        </p>
        { rocketReserved === true
          ? (
            <button className="cancelBtn" type="button" id={rocketId} onClick={cancelHandler}>
              Cancel Reservation
            </button>
          )
          : (
            <button className="reserveBtn" type="button" id={rocketId} onClick={reserveHandler}>
              Reserve Rocket
            </button>
          )}
      </div>
    </section>
  );
}

RocketsCards.propTypes = {
  rocket: PropTypes.shape({
    rocketId: PropTypes.string,
    rocketName: PropTypes.string,
    rocketDesc: PropTypes.string,
    rocketImg: PropTypes.string,
    rocketReserved: PropTypes.bool,
  }).isRequired,
};

export default RocketsCards;
