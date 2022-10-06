// actions
const FETCH_ROCKETS = 'FETCH_ROCKETS';

// constant apiUrl
const baseUrl = 'https://api.spacexdata.com/v3/rockets';

// intial state
const initialState = {
  rockets: [],
};

// create action creators return object

export const getRockets = (payload) => ({
  type: FETCH_ROCKETS,
  payload,
});

// Action creator that return a function
export const getRocketFromApi = () => async (dispatch) => {
  const request = await fetch(baseUrl);
  const response = await request.json();
  dispatch(getRockets(response));
};

// Create a reducer
const rocketReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROCKETS:
      return { ...state, rockets: action.payload };
    default:
      return state;
  }
};

export default rocketReducer;
