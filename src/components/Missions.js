import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMissionFromAPI } from '../redux/missions/missions';
import MissionCard from './MissionCard';

const Missions = () => {
  const dispatch = useDispatch();

  const missions = useSelector((state) => state.missionReducer);

  const mission = missions.missions.map((mission) => (
    <MissionCard key={mission.mission_id} mission={mission} />
  ));

  useEffect(() => {
    if (!missions.missions[0]) {
      dispatch(getMissionFromAPI());
    }
  }, []);

  return (
    <div className="contents">
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th style={{ width: '10%' }} scope="col">Mission</th>
            <th style={{ width: '70%' }} scope="col">Description</th>
            <th style={{ width: '10%' }} scope="col">Status</th>
            <th style={{ width: '10%' }} scope="col">Action</th>
          </tr>
        </thead>
        {mission}
      </table>
    </div>
  );
};

export default Missions;
