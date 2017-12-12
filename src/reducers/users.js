const initialState = {
  currentUser: "Vitalii Kulyk",
  allUsersData: [],
  recentUsersData: []
};

export default function page(state = initialState, action) {
  switch (action.type) {
    case "GET_DATA":
      return { ...state, year: action.payload };

    case "CHANGE_USER":
      return { ...state, currentUser: action.payload };

    default:
      return state;
  }
}
