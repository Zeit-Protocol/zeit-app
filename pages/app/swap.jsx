import React, { useState } from "react";
import Image from "next/image";
import HeadComp from "@/layout/HeadComp";
import { useData } from "@/context/DataContext";
import Button from "../component/Button";
import dynamic from "next/dynamic";

import { connectWallet } from "../../utils/connectWallet";

const TVChartContainer = dynamic(
  () =>
    import("@/components/TVChartContainer").then((mod) => mod.TVChartContainer),
  { ssr: false }
);

const Swap = () => {
  const { mode } = useData();
  const [popUp, setModal] = useState(false);
  const [rotateStat, setStat] = useState(false);
  const [chartMod, setChartMod] = useState(false);
  // state to track if a user's wallet is connected
  const [isConnected, setIsConnected] = useState(false);
  const removeModal = () => {
    setModal(false);
  };
  const togglePopUp = (val) => {
    setModal(true);
  };
  const handleSwitch = () => {
    setStat(true);
    setTimeout(() => setStat(false), 500);
  };
  const toggleChart = () => {
    setChartMod(!chartMod);
  };
  return (
    <>
      <HeadComp title="Zeit | Swap" />
      <main
        className={`${
          mode ? "bg-white" : "bg-[#1E1E1E]"
        } bg-sw pt-[96px] pb-[179px] transition-[.4s]`}
      >
        <section className="flex w-[90%] gap-[32px] mx-auto">
          <div
            className={`transition-[.4s] w-[80%] rounded-[16px] sw-bxshdw ${
              chartMod ? "max-w-[100%] p-[16px]" : "max-w-0 invisible"
            } `}
          >
            <TVChartContainer />
          </div>
          <div className="max-w-[584px] mx-auto bg-white rounded-[16px] sw-bxshdw w-[35%] p-[16px]">
            <h1 className="text-[#364152] text-[24px] font-Inter font-[600]">
              Swap
            </h1>
            <p className="font-Inter text-[16px] text-[#364152] mb-[16px] font-[400]">
              Instantly Trade Tokens
            </p>
            <hr className="mb-[16px] text-[#E3E8EF] bg-[#E3E8EF]" />
            <div className="h-[24px] mb-[16px] w-full">
              <span className="h-full flex gap-[16px] float-right">
                <button onClick={toggleChart} className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M6 20V14"
                      stroke={chartMod ? "#5BC0BE" : "#000"}
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M18 20V10"
                      stroke={chartMod ? "#5BC0BE" : "#000"}
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12 20V4"
                      stroke={chartMod ? "#5BC0BE" : "#000"}
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
                {/* <button className="">
                  <Image width={23} height={1} src="/images/fi_settings.svg" alt="settings" />
                </button> */}
              </span>
            </div>
            <div className="p-[8px] border border-[#E3E8EF] rounded-[16px]">
              <div className="h-[40px]">
                <button
                  onClick={() => togglePopUp("from")}
                  className="h-full rounded-[8px] w-fit font-Inter font-[400] text-[#364152] text-[14px] flex items-center p-[8px]"
                >
                  <Image
                    width={23}
                    height={1}
                    src="/images/btc.svg"
                    className=" mr-[4px]"
                    alt="token"
                  />
                  USDC
                  <span className="ml-[8px]">
                    <Image
                      width={20}
                      height={1}
                      src="/images/fi_chevron.svg"
                      className=" "
                      alt="chevron"
                    />
                  </span>
                </button>
              </div>
              <div className="my-[8px] bg-[#F8FAFC] rounded-[8px] p-[8px] flex justify-between items-center">
                <button className="py-[2px] px-[8px] rounded-[8px] text-[#697586] text-[14px] font-[400] font-Inter">
                  MAX
                </button>
                <div className="">
                  <input
                    type="number"
                    className="text-[#9AA4B2] h-[30px] font-Inter text-[20px] w-[57px] bg-transparent outline-none font-[500]"
                    placeholder="0.000"
                  />
                  <p className="text-[#9AA4B2] text-[14px] font-[400] font-Inter text-right">
                    $0.00
                  </p>
                </div>
              </div>
              <div className="h-[28px] flex justify-between mb-[8px]">
                <button className="l-trans-btn small-btn">25%</button>
                <button className="l-trans-btn small-btn">50%</button>
                <button className="l-trans-btn small-btn">75%</button>
                <button className="l-trans-btn small-btn">100%</button>
              </div>
            </div>
            <div className="my-[16px] mx-auto w-fit">
              <button onClick={handleSwitch} className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`transition-[.4s] ${
                    rotateStat && "rotate-[90deg]"
                  }`}
                  width="40"
                  height="30"
                  viewBox="0 0 40 30"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.70864 19.5226C10.7949 21.4041 13.5106 21.4041 14.5969 19.5225L21.2039 8.07895H9.5042C8.40719 8.07895 7.5179 7.18965 7.5179 6.09265C7.5179 4.99564 8.4072 4.10635 9.5042 4.10635H23.4933C24.4471 2.24814 23.102 0.00195485 20.9789 0.00195467L3.32671 0.00195313C1.15413 0.00195294 -0.203721 2.35383 0.882565 4.23534L9.70864 19.5226Z"
                    fill="#5BC0BE"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M29.7874 9.49023C28.7011 7.60872 25.9854 7.60873 24.8991 9.49023L18.2965 20.9262H30.1609C31.2579 20.9262 32.1472 21.8155 32.1472 22.9125C32.1472 24.0095 31.2579 24.8988 30.1609 24.8988H16.0066C15.0452 26.7585 16.3911 29.0108 18.5171 29.0108H36.1693C38.3419 29.0108 39.6997 26.6589 38.6134 24.7774L29.7874 9.49023Z"
                    fill="#424242"
                  />
                </svg>
              </button>
            </div>
            <div className="p-[8px] border border-[#E3E8EF] rounded-[16px]">
              <div className="h-[40px]">
                <button
                  onClick={() => togglePopUp("to")}
                  className="h-full rounded-[8px] w-fit font-Inter font-[400] text-[#364152] text-[14px] flex items-center p-[8px]"
                >
                  <Image
                    width={23}
                    height={1}
                    src="/images/btc.svg"
                    className=" mr-[4px]"
                    alt="token"
                  />
                  USDC
                  <span className="ml-[8px]">
                    <Image
                      width={20}
                      height={1}
                      src="/images/fi_chevron.svg"
                      className=" "
                      alt="chevron"
                    />
                  </span>
                </button>
              </div>
              <div className="my-[8px] bg-[#EEF2F6] rounded-[8px] p-[8px] flex justify-between items-center">
                <button className="py-[2px] px-[8px] rounded-[8px] text-[#697586] text-[14px] font-[400] font-Inter">
                  MAX
                </button>
                <div className="">
                  <input
                    type="number"
                    className="text-[#9AA4B2] h-[30px] font-Inter text-[20px] w-[57px] bg-transparent outline-none font-[500]"
                    placeholder="0.000"
                  />
                  <p className="text-[#9AA4B2] text-[14px] font-[400] font-Inter text-right">
                    $0.00
                  </p>
                </div>
              </div>
            </div>
            <div className="my-[16px] font-Inter text-[14px] font-[500] text-[#202939] flex justify-between items-center">
              <span className="">Slippage</span>
              <span className="">5%</span>
            </div>
            <div className="">
              {!isConnected ? (
                <Button onClickHandler={() => connectWallet(setIsConnected)}>
                  Connect Wallet
                </Button>
              ) : (
                <Button> Swap</Button>
              )}
            </div>
          </div>
        </section>
      </main>
      <section
        className={`fixed ${!popUp && "scale-0"} ${
          mode ? "bg-[#00000029]" : "backdrop-blur-[9px] bg-[#00000075]"
        } transition-[.5s] z-[1] w-full top-0 bottom-0 bg-[#00000029]`}
      >
        <div
          className={`fixed p-[16px] w-[94%] left-[3%] md:w-[25%] md:left-[37.5%] rounded-[16px] ${
            mode ? "hero" : "bg-[#1E1E1E]"
          } h-fit top-[15vh]`}
        >
          <div className="flex mb-[8px] w-full justify-between">
            <p
              className={` font-Inter ${
                mode ? "text-[#000]" : "text-white"
              } text-[24px] font-[600]`}
            >
              Select Token
            </p>
            <button onClick={removeModal}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M18 6L6 18"
                  stroke={mode ? "black" : "white"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 6L18 18"
                  stroke={mode ? "black" : "white"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <p className="text-[16px] font-Inter font-[400]">
            Search using a Token name or Contract address
          </p>
          <div className="">
            <input
              type="text"
              className="w-full p-[6px] my-[16px] text-[#A3A3A3] font-Inter text-[16px] font-[400] text-input"
            />
          </div>
          <h3 className="font-Inter text-[16px] font-[700] mb-[16px]">
            Hot Tokens
          </h3>
          <div className="flex gap-[16px] overflow-x-auto mb-[12px] pb-[4px]">
            <button className="h-[40px] p-[8px] text-[#364152] font-Inter font-[400] flex items-center text-[14px]">
              <Image
                width={20}
                height={1}
                src="/images/btc.svg"
                className=" mr-[4px]"
                alt="token"
              />
              BTC
            </button>
            <button className="h-[40px] p-[8px] text-[#364152] font-Inter font-[400] flex items-center text-[14px]">
              <Image
                width={20}
                height={1}
                src="/images/btc.svg"
                className=" mr-[4px]"
                alt="token"
              />
              BTC
            </button>
            <button className="h-[40px] p-[8px] text-[#364152] font-Inter font-[400] flex items-center text-[14px]">
              <Image
                width={20}
                height={1}
                src="/images/btc.svg"
                className=" mr-[4px]"
                alt="token"
              />
              BTC
            </button>
            <button className="h-[40px] p-[8px] text-[#364152] font-Inter font-[400] flex items-center text-[14px]">
              <Image
                width={20}
                height={1}
                src="/images/btc.svg"
                className=" mr-[4px]"
                alt="token"
              />
              BTC
            </button>
          </div>
          <h3 className="font-Inter text-[16px] font-[700]">Token List</h3>
          <div className="overflow-y-auto max-h-[30vh]">
            <button className="my-[8px] w-full hover:bg-[#00000010] transition-[.4s] rounded-[8px] flex justify-between items-center py-[4px] px-[8px]">
              <div className="flex items-center gap-[21px]">
                <Image
                  width={23}
                  height={1}
                  src="/images/btc.svg"
                  className=" mr-[4px]"
                  alt="coins"
                />
                <div className="">
                  <p className="text-[#364152] text-left text-[16px] font-[400] font-Inter">
                    ETH
                  </p>
                  <p className="text-[#697586] text-left text-[12px] font-[400] font-Inter">
                    Ethereum
                  </p>
                </div>
              </div>
              <div className="">
                <p className="text-[#697586] text-[14px] font-[500] font-Inter text-right">
                  2,322.05
                </p>
                <p className="text-[12px] font-Inter font-[600] text-[#17B26A] text-right">
                  2.58
                </p>
              </div>
            </button>
            <button className="my-[8px] w-full hover:bg-[#00000010] transition-[.4s] rounded-[8px] flex justify-between items-center py-[4px] px-[8px]">
              <div className="flex items-center gap-[21px]">
                <Image
                  width={23}
                  height={1}
                  src="/images/btc.svg"
                  className=" mr-[4px]"
                  alt="coins"
                />
                <div className="">
                  <p className="text-[#364152] text-left text-[16px] font-[400] font-Inter">
                    ETH
                  </p>
                  <p className="text-[#697586] text-left text-[12px] font-[400] font-Inter">
                    Ethereum
                  </p>
                </div>
              </div>
              <div className="">
                <p className="text-[#697586] text-[14px] font-[500] font-Inter text-right">
                  2,322.05
                </p>
                <p className="text-[12px] font-Inter font-[600] text-[#17B26A] text-right">
                  2.58
                </p>
              </div>
            </button>
            <button className="my-[8px] w-full hover:bg-[#00000010] transition-[.4s] rounded-[8px] flex justify-between items-center py-[4px] px-[8px]">
              <div className="flex items-center gap-[21px]">
                <Image
                  width={23}
                  height={1}
                  src="/images/btc.svg"
                  className=" mr-[4px]"
                  alt="coins"
                />
                <div className="">
                  <p className="text-[#364152] text-left text-[16px] font-[400] font-Inter">
                    ETH
                  </p>
                  <p className="text-[#697586] text-left text-[12px] font-[400] font-Inter">
                    Ethereum
                  </p>
                </div>
              </div>
              <div className="">
                <p className="text-[#697586] text-[14px] font-[500] font-Inter text-right">
                  2,322.05
                </p>
                <p className="text-[12px] font-Inter font-[600] text-[#17B26A] text-right">
                  2.58
                </p>
              </div>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Swap;
