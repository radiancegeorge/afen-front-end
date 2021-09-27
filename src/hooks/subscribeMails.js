import axios from "axios";
import useAxios from "axios-hooks";
import { useState } from "react";
const useSubscribe = () => {
  const [{ data, error, loading }, subscribe] = useAxios(
    {
      method: "post",
      url: "/subscribe",
    },
    {
      manual: true,
    }
  );

  return {
    subscribe,
    data,
    error,
    loading,
  };
};

export default useSubscribe;
