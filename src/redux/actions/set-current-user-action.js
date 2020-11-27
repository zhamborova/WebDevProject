

export const setCurrentUser = (dispatch, currentUser) =>
   dispatch({
       type: "SET_CURRENT_USER",
       currentUser: currentUser
   })
