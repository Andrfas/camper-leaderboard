import actions from "../const/actions";

const initialState = {
  currentUser: "Vitalii Kulyk",
  allUsersData: [],
  recentUsersData: [],
  loading: false,
  error: false
};

export default function page(state = initialState, action) {
  let error;
  switch (action.type) {
    case actions.GET_USERS:
      return {
        ...state,
        allUsersData: [],
        recentUsersData: [],
        error: false,
        loading: true
      };

    case actions.GET_USERS_SUCCESS:
      return {
        ...state,
        usersData: action.payload,
        error: null,
        loading: false
      };

    case actions.GET_USERS_FAILURE:
      error = action.payload || { message: action.payload.message };
      return {
        ...state,
        usersData: [],
        loading: false
      };

    default:
      return state;
  }
}
