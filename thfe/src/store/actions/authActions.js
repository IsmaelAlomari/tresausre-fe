import axios from "axios";
import * as actionTypes from "./types";
import decode from "jwt-decode";

export const signup = (userData, history) => {
  return async (dispatch) => {
    try {
      const res = await axios.post("http://localhost:8000/signup", userData);
      dispatch({
        type: actionTypes.SIGNUP,
      });
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };
};

export const signin = (userData, history) => {
  return async (dispatch) => {
    try {
      const res = await axios.post("http://localhost:8000/signin", userData);

      dispatch({
        type: actionTypes.SET_USER,
        payload: decode(res.data.token),
      });
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };
};

// export const signOut = (history) => {
//   return async (dispatch) => {
//     dispatch({
//       type: actionTypes.SET_USER,
//       payload: null,
//     });
//     history.push("/");
//   };
// };
