import Spinner from './Spinner';
import useGif from './useGif';

// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

function Random() {
  const { gif, loading, fetchData } = useGif();

  return (
    <div className="w-1/2 flex flex-col items-center gap-y-5 mt-[15px] bg-green-400 rounded-lg border border-black">
      <h1 className=" text-2xl mt-[15px] underline uppercase font-semibold">
        A Random Gifs
      </h1>
      {loading ? <Spinner /> : <img src={gif} width="450" />}
      <button
        onClick={() => fetchData()}
        className="bg-yellow-100 text-lg py-2 mb-[20px] rounded-lg w-10/12 "
      >
        Generate
      </button>
    </div>
  );
}

export default Random;
