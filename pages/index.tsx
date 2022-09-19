import type { NextPage } from "next";
import Head from "next/head";
import AudioPlayerExample from "../components/AudioPlayerExample";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <main className="flex w-full flex-1 flex-col items-center justify-center px-5 sm:px-20 text-center">
        <h1 className="text-6xl font-bold">hello world!</h1>
        <AudioPlayerExample />
      </main>
    </div>
  );
};

export default Home;
