export function getData(path) {
  return {
    type: "GET_DATA",
    payload: path
  };
}

export function changeUser(newUser) {
    return {
      type: "CHANGE_USER",
      payload: newUser
    };
  }
