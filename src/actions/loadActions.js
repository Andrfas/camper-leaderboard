import axios from "axios";
import constApi, { constFilterType } from "../const/const";
import actions from "../const/actions";

export function fetchPosts(type) {
  let url = constApi.pathToApi;
  let method =
    type === constFilterType.allTime ? constApi.allTime : constApi.recent;
  const request = axios.get(url + method);
  return {
    type: actions.GET_USERS,
    payload: request
  };
}

export function fetchPostsSuccess(posts) {
  return {
    type: actions.GET_USERS_SUCCESS,
    payload: posts
  };
}

export function fetchPostsFailure(error) {
  return {
    type: actions.GET_USERS_FAILURE,
    payload: error
  };
}
