import React, { useState, useEffect } from "react";

const useFetch = (url) => {
  const [todoS, setTodoS] = useState(null);
  const [MessageSend, setMessageSend] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("This is error");
        }
        return res.json();
      })
      .then((data) => {
        setTodoS(data);
        setMessageSend(false);
        console.log(data);
      })
      .catch((error) => {
        setError(error);
        setMessageSend(false);
        console.log(error);
      });
  }, [url]);
  return { todoS, MessageSend, error };
};
export default useFetch;
