import { useState } from 'react';
import Spinner from './Spinner';
import useGif from './useGif';

function Tag() {
  const [tag, setTag] = useState('');
  const { gif, loading, fetchData } = useGif(tag);

  return (
    <div className="w-1/2 flex flex-col items-center gap-y-5  bg-blue-400 rounded-lg border border-black">
      <h1 className=" text-2xl mt-[15px] underline uppercase font-semibold">
        Random {tag} Gifs
      </h1>
      {loading ? <Spinner /> : <img src={gif} width="450" />}
      <input
        className=" bg-white py-2 text-lg mb-[2px] rounded-lg w-10/12 text-center"
        onChange={(event) => setTag(event.target.value)}
        value={tag}
      />
      <button
        onClick={() => fetchData(tag)}
        className="bg-yellow-100 text-lg py-2 mb-[20px] rounded-lg w-10/12 "
      >
        Generate
      </button>
    </div>
  );
}

export default Tag;
