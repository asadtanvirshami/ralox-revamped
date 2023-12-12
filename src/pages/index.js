import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import Head from "next/head";
import { Inter } from "next/font/google";

import { Spinner } from "@nextui-org/react";
import Loader from "@/components/shared/Loader";

const inter = Inter({ subsets: ["latin"] });

export default function Landing() {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter()

  useEffect(() => {
    // Simulate a delay using setTimeout
    const delay = 800; // Adjust the delay duration in milliseconds

    const timeoutId = setTimeout(() => {
      setIsLoading(false);
      router.push('/home')
    }, delay);

    // Clear the timeout if the component unmounts
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <div>
        <Head>
          <title>Three.js Model</title>
          <meta name="description" content="Your description here" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="flex align-middle justify-center ">
          <Loader />
        </div>
      </div>
    </>
  );
}
