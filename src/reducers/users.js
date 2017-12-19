import actions from "../const/actions";

const initialState = {
  currentUser: "Vitalii Kulyk",
  allUsersData: [],
  recentUsersData: [],
  isFetching: false,
  error: false
};

export default function users(state = initialState, action) {
  switch (action.type) {
    case actions.GET_USERS:
      return Object.assign({}, state, {
        isFetching: true,
        error: false
      });

    case actions.GET_RECENT_USERS:
      return Object.assign({}, state, {
        isFetching: true,
        error: false
      });

    case actions.GET_USERS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        error: false,
        allUsersData: action.users
      });

    case actions.GET_RECENT_USERS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        error: false,
        recentUsersData: action.users
      });

    case actions.GET_USERS_FAILURE:
      return Object.assign({}, state, {
        error: true
      });

    default:
      return state;
  }
}
