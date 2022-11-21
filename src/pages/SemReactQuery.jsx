import axios from "axios";
import { useState } from "react";

function SemReactQuery() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [data, setData] = useState({});


  const fetchData = async () => {
    setError(false);
    setIsLoading(true);

    try {
      const response = await axios.get("https://random.dog/woof.json");
      setData(response.data)
    }catch(error) {
      setError(true);
    }
      setIsLoading(false);
  };

  if (isError) return <h1> Error, try again!</h1>
  if (isLoading) return <h1>Loading ...</h1>

  return(
    <div>
      <img src={data.url} width="400"/>
      <button onClick={fetchData}>new dog!</button>
    </div>
  )
}

export default SemReactQuery;