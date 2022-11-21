import axios from "axios";
import { useQuery } from "@tanstack/react-query"; 

function ComReactQuery() {
  const fetchData = () => {
    return axios.get("https://random.dog/woof.json")
  };

  const {isFetching, isInitialLoading, isError, error, data, refetch} = useQuery(['fetching dogs'], fetchData, {
    enabled: false,
  } )

  return(
    <div>
      <button onClick={() => refetch()}>new dog!</button>

      {data?(<img src={data.data.url} width="400"/>):(
        isError ? (
          <span>Error: {error.message}</span>
        ) : (
          isInitialLoading ? (
            <span>Loading...</span>
         ) : (
            <span>Not ready ...</span>
         )
        )
      )}
      <div>{isFetching ? 'Fetching...' : null}</div>
    </div>

  )
}

export default ComReactQuery;