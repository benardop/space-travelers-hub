import React from 'react';

const RocketCard = (props) => {
  const rocketData = props;
  return (
    <div className="contents">
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={rocketData.rocket.flickr_images[0]} className="img-fluid rounded-start" alt={rocketData.rocket.rocket_name} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{rocketData.rocket.rocket_name}</h5>
              <p className="card-text">{rocketData.rocket.description}</p>
              <button type="button" className="btn btn-primary">Reserve Rocket</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RocketCard;
