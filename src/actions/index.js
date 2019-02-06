import jsonPlaceholder from '../apis/jsonPlaceholder';
import axios from 'axios';

export const fetchPost = () => {
  return async (dispatch) => {
    const response = await axios.get('http://jsonplaceholder.typicode.com/posts');
    dispatch({
      type: "FETCH_POST",
      payload: response.data
    });
  };
};

export const fetchUser = (id) => async dispath => {
  const response = await axios.get("http://jsonplaceholder.typicode.com/users/" + id);
  dispath ({
    type: "FETCH_USER",
    payload: response.data
  });
};
