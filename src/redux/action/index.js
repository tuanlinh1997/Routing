import * as ActionType from "./../const/ActionType";



export const actGetListMovie = ListMovie => {
  return {
    type: ActionType.GET_LIST_MOVIE,
    data: ListMovie
  };
};
