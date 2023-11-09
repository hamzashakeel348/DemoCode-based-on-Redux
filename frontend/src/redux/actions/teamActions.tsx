import {
  FETCH_TEAMS_REQUEST,
  FETCH_TEAMS_FAILURE,
  FETCH_TEAMS_SUCCESS,
  ADD_TEAM_FAILURE,
  ADD_TEAM_REQUEST,
  ADD_TEAM_SUCCESS,
} from "./actionTypes";
import { Dispatch } from "redux";
import axios from "axios";

const baseUrl: string = "http://backend.localhost/api/v1";

interface fetchApiResponse {
  data: [];
}

interface postApiResponse {
  data: {
    id: string;
    name: string;
    captain: {
      id: string;
      fname: string;
      lname: string;
    };
  };
}

export const addTeam = (data: object) => {
  return (dispatch: Dispatch) => {
    dispatch(addTeamRequest());
    axios
      .post(`${baseUrl}/teams`, {
        data,
      })
      .then((res: postApiResponse) => {
        dispatch(addTeamSuccess(res.data));
      })
      .catch((err: any) => {
        dispatch(addTeamFailure(err.message));
      });
  };
};

export const fetchTeams = () => {
  return (dispatch: Dispatch) => {
    dispatch(fetchTeamsRequest());
    axios
      .get(`${baseUrl}/teams`)
      .then((res: fetchApiResponse) => {
        const teams = res.data;
        dispatch(fetchTeamsSuccess(teams));
      })
      .catch((err: any) => {
        const errorMessage = err.message;
        dispatch(fetchTeamsFailure(errorMessage));
      });
  };
};

const addTeamSuccess = (team: object) => ({
  type: ADD_TEAM_SUCCESS,
  payload: {
    ...team,
  },
});

const addTeamRequest = () => ({
  type: ADD_TEAM_REQUEST,
});

const addTeamFailure = (error: any) => ({
  type: ADD_TEAM_FAILURE,
  payload: {
    error,
  },
});

const fetchTeamsRequest = () => ({
  type: FETCH_TEAMS_REQUEST,
});

const fetchTeamsSuccess = (teams: object) => ({
  type: FETCH_TEAMS_SUCCESS,
  payload: teams,
});

const fetchTeamsFailure = (error: any) => ({
  type: FETCH_TEAMS_FAILURE,
  payload: error,
});
