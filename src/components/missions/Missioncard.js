import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { unjoinMission, joinMission } from '../../redux/missions/MissionsSlice';
import '../stylesheets/Missioncard.css';

const Missioncard = ({
  missionname, description, id, missionjoin,
}) => {
  const dispatch = useDispatch();

  const missionSwitchHandler = (e) => {
    dispatch(joinMission(e.target.id));
  };

  const unjoinswitchhandler = (e) => {
    dispatch(unjoinMission(e.target.id));
  };
  return (
    <div className="mission-card">
      <div className="mission">
        <div className="tbody">
          <div className="left">{missionname}</div>
          <div className="center">
            {description}
          </div>
          <div className="right">
            {missionjoin === false ? (<span className="badge2">Not A Member</span>) : (<span className="badge">Active Member</span>)}
            {missionjoin === false ? (<button className="join" type="submit" id={id} onClick={missionSwitchHandler}>Join Mision</button>) : (<button className="join-btn" type="submit" id={id} onClick={unjoinswitchhandler}>Leave Mission</button>)}
          </div>
        </div>
      </div>
    </div>
  );
};

Missioncard.propTypes = {
  id: PropTypes.string.isRequired,
  missionname: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  missionjoin: PropTypes.bool.isRequired,
};

export default Missioncard;
