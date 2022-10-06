import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../stylesheets/Myprofile.css';
import { cancelRocket } from '../../redux/rockets/RocketsSlice';
import { unjoinMission, selectAllmissions } from '../../redux/missions/MissionsSlice';

function Myprofile() {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets.filter((el) => el.rocketReserved === true));
  const reservation = useSelector(selectAllmissions);
  const missiondat = reservation.filter((item) => item.missionjoin === true);

  const cancelHandler = (e) => {
    const data = e.target.id;
    dispatch(cancelRocket(data));
  };

  const cancelmissionHandler = (e) => {
    const misiondata = e.target.id;
    dispatch(unjoinMission(misiondata));
  };

  return (
    <section className="tableContainer">
      <div className="missions">
        <h1>My Missions</h1>
        <div className="itemsList">
          {!missiondat.length ? (<li>There are no missions joined.</li>) : null }
          {missiondat && missiondat.map((el) => (
            <div className="listBox" key={el.missionid}>
              <h2 className="listName">
                {el.missionName}
              </h2>
              <button className="readMore" type="button">
                <a href={el.missionweblink}>
                  Read More
                </a>
              </button>
              <button className="remBtn" type="button" id={el.missionid} onClick={cancelmissionHandler}>
                Cancel
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="rockets">
        <h1>My Rockets</h1>
        <div className="itemsList">
          {!rockets.length ? (<li>There are no rockets reserved.</li>) : null }
          {rockets && rockets.map((el) => (
            <div className="listBox" key={el.rocketId}>
              <h2 className="listName">
                {el.rocketName}
              </h2>
              <button className="readMore" type="button">
                <a href={el.rocketWiki}>
                  Read More
                </a>
              </button>
              <button className="remBtn" type="button" id={el.rocketId} onClick={cancelHandler}>
                Cancel
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Myprofile;
