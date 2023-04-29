import React, { useContext } from "react";
import Head from "next/head";
import Image from "next/image";
import Web3 from "web3";

import { useRouter } from "next/router";

import { Modal } from "@/components";
import { Hero } from "@/sections";
import CreateMeetContext from "@/context/MeetContext";
import { shortenAddress } from "@/utils/shortenAddr";

import { Navbar, Info } from "@/components";

export default function Home() {
  const { address, setAddress, toggleModal, setToggleModal, connectWallet } =
    useContext(CreateMeetContext);

  const router = useRouter();

  return (
    <>
      {/* <Navbar explore /> */}
      <Head>
        <title>InfoBase</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {toggleModal && (
          <div className="fixed z-50 top-0 bottom-0 left-0 right-0 w-[100vw] h-[100vh] flex items-center justify-center bg-gray-600 bg-opacity-10 backdrop-filter backdrop-blur-lg">
            <Modal />
          </div>
        )}

        <div className="h-[100vh] px-[20px]">
          <div className="absolute right-[20px] top-[20px] space-x-4">
            {address !== "" ? (
              <p className="text-white">{shortenAddress(address)}</p>
            ) : (
              <button
                className="btn btn-outline border-[2px] px-[30px] text-[14px] border-[#950740] text-[#c3073f] hover:bg-[#950740] hover:border-[#950740] hover:text-[#1a1a1d]"
                onClick={() => connectWallet()}
              >
                connect wallet
              </button>
            )}
          </div>

          <div className="flex items-center justify-center font-semibold pt-[100px] text-[40px] text-transparent bg-clip-text bg-gradient-to-br from-[#C3073F] to-[#950740]">
            InfoBase
          </div>

          <Hero />
        </div>
      </main>
    </>
  );
}
