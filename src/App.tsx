import useAxios from "./hooks/useAxios";
import { CatFact } from "./components/Cat/CatFact";
import { Image } from "./components/Image/Image";
import { useState } from "react";
import { facts } from "./utils/catFacts";

function App() {
  const [randomNumber, setRandomNumber] = useState<number>(0);

  const { response: factResponse, error: factError } = useAxios({
    baseURL: "https://cat-fact.herokuapp.com",
    method: "get",
    url: "/facts",
  });

  const isFactFetchErr = factError?.message === "Network Error";

  const {
    response,
    loading,
    error: imgError,
    sendData,
  } = useAxios({
    baseURL: "https://api.thecatapi.com/v1/images",
    method: "get",
    url: "/search",
  });

  function showNextCat() {
    setRandomNumber(Math.floor(Math.random() * 5));

    sendData();
  }

  const imageSrc: string = response?.data[0].url;

  return (
    <div className="app">
      <h1 className="title">Random Cat Facts</h1>
      {imgError && <p className="error">Failed to fetch cat.</p>}
      {<Image src={imageSrc} alt="cat" loading={loading} />}

      <CatFact
        showNextCat={showNextCat}
        catFact={
          !isFactFetchErr
            ? factResponse?.data[randomNumber].text
            : facts[randomNumber]
        }
      />

      {isFactFetchErr && (
        <p className="error">Failed to get cat fact.</p>
      )}
    </div>
  );
}

export default App;
