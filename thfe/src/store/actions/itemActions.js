import * as actionTypes from "./types";
import axios from "axios";

export const fetchItems = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get("http://localhost:8000/itemsList");
      dispatch({
        type: actionTypes.FETCH_ITEMS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
