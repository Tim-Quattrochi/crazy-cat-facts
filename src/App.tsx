import useAxios from "./hooks/useAxios";
import { Cat } from "./components/Cat/Cat";
import { Image } from "./components/Image/Image";
import { useState } from "react";
import { facts } from "./utils/catFacts";

export type Cats = {
  _id: string;
  text: string;
};

function App() {
  const [cat, setCat] = useState<Cats | undefined>(undefined);
  const [showNext, setShowNext] = useState(false);

  const {
    response: factResponse,
    loading: factLoading,
    error: factError,
  } = useAxios({
    baseURL: "https://cat-fact.herokuapp.com",
    method: "get",
    url: "/facts",
  });

  const isFactFetchErr = factError?.message === "Network Error";

  const { response, loading, error, sendData } = useAxios({
    baseURL: "https://api.thecatapi.com/v1/images",
    method: "get",
    url: "/search",
  });

  function showNextCat() {
    if (factResponse?.data) {
      const next = [...factResponse.data]
        .sort(() => Math.random() - 0.5)
        .pop();

      setCat(next);
      sendData();
    }
  }


  const randomNumber = Math.floor(Math.random() * 10);
  const imageSrc: string = response?.data[0].url;

  return (
    <div>
      <h1 className="title">Random Cat Facts</h1>
      {<Image src={imageSrc} alt="cat" loading={loading} />}
      {/* {factLoading && <p className="loading">Loading...</p>} */}
      {!isFactFetchErr && (
        <Cat
          text={
            String(facts[randomNumber])
            // : factResponse.data[0].text
          }
          setShowNext={setShowNext}
          showNextCat={showNextCat}
          cat={cat}
        />
      )}
      {/* {factError && <p className="error">{factError.message}</p>} */}
    </div>
  );
}

export default App;
