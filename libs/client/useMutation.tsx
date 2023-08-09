import React, { useState } from "react";

interface IMutation {
  loading: boolean;
  data: undefined | any;
  error: undefined | any;
}

type UseMutaionResult = [(data: any) => void, IMutation];

const useMutation = (url: string): UseMutaionResult => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(undefined);
  const [error, setError] = useState(undefined);

  const mutation = (data: any) => {
    setLoading(true);

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json().catch(() => {}))
      .then(setData)
      .catch(setData)
      .finally(() => setLoading(false));
  };

  return [mutation, { loading, data, error }];
};

export default useMutation;
