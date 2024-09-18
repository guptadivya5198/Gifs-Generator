import Random from './components/Random';
import Tag from './components/Tag';

export default function App() {
  return (
    <div className="flex flex-col relative w-full h-screen background overflow-x-hidden items-center">
      <h1 className="bg-white w-11/12 px-10 py-2 text-center mt-[40px] rounded-lg font-bold text-4xl">
        RANDOM GIFS
      </h1>
      <div className="flex flex-col w-full items-center gap-y-10 mt-[30px]">
        <Random />
        <Tag />
      </div>
    </div>
  );
}
