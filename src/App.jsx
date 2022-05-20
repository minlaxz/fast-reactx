import * as React from "react";
import * as stlyes from "./App.module.css";
import { useSelector, useDispatch } from "react-redux";
import { countPlus, countMinus } from "@/redux/reducers/counter";
import { apiFetcher, wrongFetcher } from "@/fetchers/apifetcher";
import { fetchReset } from "@/redux/reducers/api";
import { Link } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counterR);
  const { isLoading, data, error } = useSelector((state) => state.apiR);
  const [fetched, setFetched] = React.useState(false);

  return (
    <div className={stlyes.myapp}>
      <div>
        <pre>A simple sync counter</pre>
        <button
          onClick={() => dispatch(countMinus())}
          style={{ marginRight: "0.5rem" }}
        >
          <span> - </span>
        </button>
        <code>{counter.value}</code>
        <button
          onClick={() => dispatch(countPlus())}
          style={{ marginLeft: "0.5rem" }}
        >
          <span> + </span>
        </button>
      </div>
      <section>
        <h4>
          {fetched && !isLoading ? `API Returned` : `Not Fetched Yet ...`}
        </h4>
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
        {fetched && !isLoading ? (
          <button
            onClick={() => {
              dispatch(fetchReset());
              setFetched(false);
            }}
          >
            Clear Data (same as refresh)
          </button>
        ) : (
          <div>
            <button
              onClick={() => {
                dispatch(apiFetcher(0));
                setFetched(true);
              }}
            >
              Fetch from API.
            </button>{" "}
            <button
              onClick={() => {
                dispatch(apiFetcher(2000));
                setFetched(true);
              }}
            >
              Fetch from API. (throttled 2 seconds)
            </button>
            <div>
              <button
                style={{
                  color: "red",
                }}
                onClick={() => {
                  dispatch(wrongFetcher(2000));
                  setFetched(true);
                }}
              >
                Wrong API CALL. (throttled 2 seconds)
              </button>
            </div>
          </div>
        )}
      </section>
      {fetched && !isLoading ? (
        <Link
          style={{
            marginTop: "1rem",
            marginBottom: "1rem",
            display: "block",
            color: "goldenrod",
          }}
          to="/autofetch"
        >
          Go To Auto Fetch Page
        </Link>
      ) : null}
    </div>
  );
}

export default App;
