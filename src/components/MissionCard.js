import React from 'react';

const MissionCard = (props) => {
  const missionData = props;
  return (
    <tr>
      <td>{missionData.mission.mission_name}</td>
      <td>{missionData.mission.description}</td>
      <td><span className="badge bg-secondary">Not A Member</span></td>
      <td><button type="button" className="btn btn-outline-primary btn-sm">Join Mission</button></td>
    </tr>
  );
};

export default MissionCard;
