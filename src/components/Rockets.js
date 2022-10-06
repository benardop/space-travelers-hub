import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRocketFromApi } from '../redux/rockets/rocket';
import RocketCard from './RocketCard';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rocketReducer);

  const rocket = rockets.rockets.map((rocket) => <RocketCard key={rocket.id} rocket={rocket} />);

  useEffect(() => {
    if (!rockets.rockets[0]) {
      dispatch(getRocketFromApi());
    }
  }, []);
  return (
    <div className="rockets">
      {rocket}
    </div>
  );
};

export default Rockets;
