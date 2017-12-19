import constApi from "../const/const";
import actions from "../const/actions";

function requestUsers() {
  return {
    type: actions.GET_USERS
  };
}

function requestRecentUsers() {
  return {
    type: actions.GET_RECENT_USERS
  };
}

function receiveUsersSuccess(data) {
  return {
    type: actions.GET_USERS_SUCCESS,
    users: data
  };
}

function receiveRecentUsersSuccess(data) {
  return {
    type: actions.GET_RECENT_USERS_SUCCESS,
    users: data
  };
}

function receiveUsersFailure(error) {
  return {
    type: actions.GET_USERS_FAILURE
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
