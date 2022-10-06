const FETCH_MISSIONS = 'FEATCH_MISSIONS';

// Fetch Missions Data
const baseUrl = 'https://api.spacexdata.com/v3/missions';

// Initialize initial State
const initialState = {
  missions: [],
};

// Create Action Object
const getMissions = (payload) => ({
  type: FETCH_MISSIONS,
  payload,
});

// Create Action Function
export const getMissionFromAPI = () => async (dispatch) => {
  const req = await fetch(baseUrl);
  const res = await req.json();
  dispatch(getMissions(res));
};

// Reducer for Missions
const missionReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MISSIONS:
      return { ...state, missions: action.payload };
    default:
      return state;
  }
};

export default missionReducer;
