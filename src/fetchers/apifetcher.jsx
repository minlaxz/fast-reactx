import axios from "axios";
import { fetchSuccess, fetchRequest, fetchFailure } from "@/redux/reducers/api";
const apiUrl = "https://jsonplaceholder.typicode.com/todos/1";
const wrongApiUrl = "https://ssjsonplaceholder.typicode.com/todos/2";

const sleep = ms => new Promise(r => setTimeout(r, ms));

export const apiFetcher = (throttled) => async (dispatch) => {
  dispatch(fetchRequest());
  sleep(throttled).then(() => {
    axios
      .get(apiUrl)
      .then(({ data }) => {
        dispatch(fetchSuccess(data));
      })
      .catch((error) => {
        dispatch(fetchFailure({
          message: error.message,
          status: error.response.status
        }));
      });
  });
};

export const wrongFetcher = (throttled) => async (dispatch) => {
  dispatch(fetchRequest());
  sleep(throttled).then(() => {
    axios
      .get(wrongApiUrl)
      .then(({ data }) => {
        dispatch(fetchSuccess(data));
      })
      .catch((error) => {
        dispatch(fetchFailure({
          message: error.message,
          status: error.response.status
        }));
      });
  });
};
//   try {
//     const response = await axios.get(apiUrl, {
//       timeout: 5000,
//     });
//     dispatch(fetchSuccess(response.data));
//   } catch (error) {
//     dispatch(
//       fetchFailure({
//         name: error.name,
//         message: error.message,
//       })
//     );
//   }
// });
// };
