import { combineReducers } from "redux";
import teamReducer from "./teamReducer"; // Import your team reducer
// Import other reducers if needed

const rootReducer = combineReducers({
  team: teamReducer, // The 'team' key is the slice of state managed by teamReducer
  // Add other slices of state and their reducers here
});

export default rootReducer;
