import {
  ADD_TEAM_FAILURE,
  ADD_TEAM_REQUEST,
  ADD_TEAM_SUCCESS,
  FETCH_TEAMS_FAILURE,
  FETCH_TEAMS_REQUEST,
  FETCH_TEAMS_SUCCESS,
} from "../actions/actionTypes";

interface AppState {
  loading: boolean;
  teams: [] | any;
  error: object | null;
}

interface actionInterface {
  type: string;
  payload: any;
}

const initialState: AppState = {
  loading: false,
  teams: [],
  error: null,
};

const teamReducer = (state = initialState, action: actionInterface) => {
  switch (action.type) {
    case ADD_TEAM_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ADD_TEAM_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        teams: [...state.teams, action.payload],
      };
    case ADD_TEAM_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case FETCH_TEAMS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_TEAMS_SUCCESS:
      return {
        ...state,
        teams: action.payload,
        loading: false,
        error: null,
      };
    case FETCH_TEAMS_FAILURE:
      return {
        ...state,
        teams: [],
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default teamReducer;
