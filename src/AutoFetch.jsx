import * as React from "react";
import * as stlyes from "./App.module.css";
import { useSelector, useDispatch } from "react-redux";
import { apiFetcher } from "@/fetchers/apifetcher";
import { Link } from "react-router-dom";

const AutoFetch = () => {
  const dispatch = useDispatch();
  const { isLoading, data, error } = useSelector((state) => state.apiR);

  React.useEffect(() => {
    dispatch(apiFetcher(0));
  }, [dispatch]);

  return (
    <div className={stlyes.myapp}>
      {isLoading ? (
        <div>Loading ...</div>
      ) : error ? (
        <div>
          <pre>{JSON.stringify(error, null, 2)}</pre>
        </div>
      ) : (
        <div>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
      <Link
        style={{
          marginTop: "1rem",
          marginBottom: "1rem",
          display: "block",
          color: "goldenrod",
        }}
        to="/"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default AutoFetch;
