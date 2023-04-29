import React, { useContext } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import { Navbar, AddworkModal } from "@/components";
import { pattern, arr_up } from "@/assets";
import CreateMeetContext from "@/context/MeetContext";

import Researcher from "@/components/Researcher";
import ResearchPapers from "@/components/ResearchPapers";

const explore = () => {
  const {
    exploreResearchers,
    toggleAddworkModal,
    setToggleAddworkModal,

    workForm,
    setWorkForm,
    exploreResearchPapers,
  } = useContext(CreateMeetContext);

  const router = useRouter();

  const handleJoin = (research) => {
    router.push(`/private/${research[5]}`);
  };

  return (
    <div>
      {toggleAddworkModal && (
        <div className='fixed z-50 top-0 bottom-0 left-0 right-0 w-[100vw] h-[100vh] flex items-center justify-center bg-gray-600 bg-opacity-10 backdrop-filter backdrop-blur-lg'>
          <AddworkModal />
        </div>
      )}

      <Navbar explore />

      <div className='px-[40px] pb-[20px]'>
        <div className='flex flex-col pt-[20px]'>
          <div className='flex flex-row justify-between items-center mb-[20px]'>
            <p className='text-[#c3073f] text-[25px] font-medium'>
              Researchers
            </p>

            <button
              className='text-[#747477] border-2 px-[20px] py-[5px] rounded-[8px] border-[#c3073f] text-[15px] hover:scale-110 hover:bg-[#c3073f] hover:text-[#1a1a1d] transition-all duration-150 ease-in-out font-medium'
              onClick={() => setToggleAddworkModal(true)}
            >
              Add Work +
            </button>
          </div>
          <div className='flex flex-wrap space-x-4 space-y-4'>
            {exploreResearchers?.map((element, i) => {
              // console.log("Researcher: ",Number(element.id._hex));
              return (
                <Researcher
                  key={i}
                  myKey={Number(element.id._hex)}
                  element={element}
                ></Researcher>
              );
            })}

            {/* <div className='flex relative flex-col items-center justify-center w-[250px] h-[350px] rounded-[15px] border-[2px] border-dashed border-[#6F2232] bg-[#2f2f3472]'>
                  <div className='absolute right-[20px] top-[20px] border border-gray-700 glassmorphism cursor-pointer z-[20] p-[10px] rounded-[10px]'>
                    <Image src={arr_up} width={20} height={20} />
                  </div>
                  {console.log("🚀 ", research[5])}

                  <div className='absolute w-full h-full rounded-[15px] overflow-hidden opacity-30 blur'>
                    <Image src={pattern} className='select-none' />
                  </div>

                  <button
                    className='absolute bottom-[10px] text-[#747477] border-2 px-[20px] py-[5px] rounded-[8px] border-[#c3073f] text-[15px] hover:scale-110 hover:bg-[#c3073f] hover:text-[#1a1a1d] transition-all duration-150 ease-in-out font-medium'
                    onClick={() => handleJoin(research)}
                  >
                    JOIN
                  </button>
                </div> */}
          </div>
        </div>

        <div className='flex flex-col pt-[20px] mt-[70px]'>
          <p className='text-[#c3073f] text-[25px] mb-[20px] font-medium'>
            Research Papers
          </p>
          <div className='flex flex-wrap space-x-4 space-y-4'>
            {exploreResearchPapers?.map((element, i) => {
              return (
                <ResearchPapers
                  key={i}
                  myKey={Number(element.id._hex)}
                  element={element}
                ></ResearchPapers>
              );
            })}
          </div>
        </div>
      </div>
      {/* <video controls autoplay name="media">
    <source src="https://gateway.lighthouse.storage/ipfs/QmdQN5R6F8mU4X8qZ3bUXCnCRNKCeaRZ1L2YjPKrbaEmh8" type="video/webm"/>
  </video> */}
    </div>
  );
};

export default explore;
