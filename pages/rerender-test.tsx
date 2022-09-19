import type { NextPage } from "next";
import { useState } from "react";
import Head from "next/head";
import AudioPlayerExampleWithState from "../components/AudioPlayerExampleWithState";

const Home: NextPage = () => {
  const [bool, setBool] = useState(true);
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <main className="flex w-full flex-1 flex-col items-center justify-center px-5 sm:px-20 text-center">
        <h1 className="text-6xl font-bold">hello world!</h1>
        <AudioPlayerExampleWithState state={bool} onClick={() => setBool((current) => !current)} />
        <div>
          <div>{bool.toString()}</div>
        </div>
      </main>
    </div>
  );
};

export default Home;
