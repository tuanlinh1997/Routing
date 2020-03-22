import * as ActionType from "./../const/ActionType";


let initialState = {
  listMovie: []
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_LIST_MOVIE:
      state.listMovie = action.data;
      return { ...state };
    default:
      return { ...state };
  }
};

export default movieReducer;
