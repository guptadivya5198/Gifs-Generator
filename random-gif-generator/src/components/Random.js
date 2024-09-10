import axios from 'axios';
import React, { useEffect, useState } from 'react';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

function Random() {
  const [gif, setGif] = useState('');
  console.log(API_KEY);

  async function fetchData() {
    try {
      const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
      const output = await axios.get(url);
      console.log(output);
    } catch (error) {
      console.log('error');
    }
  }

  useEffect(() => {
    fetchData();
  }, []);
  function clickHandler() {}

  return (
    <div className="w-1/2 h-[450px] flex flex-col items-center gap-y-5 mt-[15px] bg-green-400 rounded-lg border border-black">
      <h1 className="text-2xl underline uppercase font-semibold">
        A Random Gifs
      </h1>
      <img src={gif} width={450} />
      <button
        onClick={clickHandler}
        className="bg-yellow-100 text-lg py-2 rounded-lg w-10/12 "
      >
        Generate
      </button>
    </div>
  );
}

export default Random;
