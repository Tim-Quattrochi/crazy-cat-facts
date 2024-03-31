import { useState, useEffect } from "react";
import axios, {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";

const useAxios = (axiosParams: AxiosRequestConfig) => {
  const [response, setResponse] = useState<AxiosResponse>();
  const [error, setError] = useState<AxiosError | undefined>();
  const [loading, setLoading] = useState(
    axiosParams.method === "get" ? true : false
  );

  const fetchData = async (params: AxiosRequestConfig) => {
    try {
      const result = await axios.request(params);
      setResponse(result);
    } catch (err) {
      setError(err as AxiosError);
    } finally {
      setLoading(false);
    }
  };

  const sendData = () => {
    fetchData(axiosParams);
  };

  useEffect(() => {
    if (axiosParams.method === "get") {
      fetchData(axiosParams);
    }
  }, []);

  return { response, error, loading, sendData };
};

export default useAxios;
