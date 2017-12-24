import constApi from "../const/api";

const GET_USERS = "leaderboard/modules/GET_USERS";
const GET_USERS_SUCCESS = "leaderboard/modules/GET_USERS_SUCCESS";
const GET_USERS_FAILURE = "leaderboard/modules/GET_USERS_FAILURE";
const GET_RECENT_USERS = "leaderboard/modules/GET_RECENT_USERS";
const GET_RECENT_USERS_SUCCESS = "leaderboard/modules/GET_RECENT_USERS_SUCCESS";

const initialState = {
  currentUser: "Vitalii Kulyk",
  allUsersData: [],
  recentUsersData: [],
  isFetching: false,
  error: false
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
      return Object.assign({}, state, {
        isFetching: true,
        error: false
      });

    case GET_RECENT_USERS:
      return Object.assign({}, state, {
        isFetching: true,
        error: false
      });

    case GET_USERS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        error: false,
        allUsersData: action.users
      });

    case GET_RECENT_USERS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        error: false,
        recentUsersData: action.users
      });

    case GET_USERS_FAILURE:
      return Object.assign({}, state, {
        error: true
      });

    default:
      return state;
  }
}

export function requestUsers() {
  return {
    type: GET_USERS
  };
}

export function requestRecentUsers() {
  return {
    type: GET_RECENT_USERS
  };
}

export function receiveUsersSuccess(data) {
  return {
    type: GET_USERS_SUCCESS,
    users: data
  };
}

export function receiveRecentUsersSuccess(data) {
  return {
    type: GET_RECENT_USERS_SUCCESS,
    users: data
  };
}

export function receiveUsersFailure(error) {
  return {
    type: GET_USERS_FAILURE
  };
}

export function fetchUsers() {
    let url = constApi.pathToApi;
    let method = constApi.allTime;
    return function(dispatch) {
      dispatch(requestUsers);
      return fetch(url + method)
        .then(
          response => response.json(),
          error => console.log("an error occured ", error)
        )
        .then(json => dispatch(receiveUsersSuccess(json)));
    };
  }
  

export function fetchRecentUsers(){
    let url = constApi.pathToApi;
    let method = constApi.recent;
    return function(dispatch) {
      dispatch(requestUsers);
      return fetch(url + method)
        .then(
          response => response.json(),
          error => console.log("an error occured ", error)
        )
        .then(json => dispatch(receiveRecentUsersSuccess(json)));
    };
  }
