import { init } from "aos";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);

  return (
    <>
      <div className="top-section relative bg-[url('/top-background.png')] h-screen bg-cover flex justify-center items-center">
        
        <Link href={'/challenges'} >
        <button className="absolute top-3 right-3 px-5 py-1 text-sm font-extrabold  bg-white">
          Challenges &gt;
        </button>
        </Link>

        <div className="flex m-auto flex-col md:flex-row text-white text-center items-center justify-center">
          <div data-aos="fade-right" data-aos-delay="2000" className="">
            <p>PLANET</p>
            <p className="font-bold">STULTURE</p>
          </div>
          <div className="bg-[url('/earth.png')] h-[60vh] w-[90vw] bg-contain bg-center bg-no-repeat md:w-[70vw] flex justify-center items-center">
            <Image
              className="blink-animation"
              src={"/logo.png"}
              width={120}
              height={120}
              alt={"logo"}
            />
            <Image
              className=" absolute"
              src={"/logo.png"}
              width={100}
              height={100}
              alt={"logo"}
            />
          </div>
          <div data-aos="fade-left" data-aos-offset="0" data-aos-delay="2000" className="">
            <p>HABITANTS</p>
            <p className="font-bold">DESIGNERS</p>
          </div>
        </div>
      </div>

      <div className="bg-[url('/sectiontwo.png')] bg-center bg-cover h-[130vh] pt-20">
        <div className="bg-gray-800 bg-opacity-50 w-2/4 text-white justify-between flex flex-col py-10 h-screen mx-5 p-5 rounded-lg">
          <div data-aos="zoom-in-right" className="">
            <h2>THE FUTURE</h2>
            <p>Be a part of the next generation of superior designers</p>
          </div>
          <div data-aos="zoom-in-right" className="">
            <h2>COMPETITIONS</h2>
            <p>Take part in challenges and earn rewards for your hard work</p>
          </div>
          <div data-aos="zoom-in-right" className="">
            <h2>Des vs Des</h2>
            <p>Complete with designers all over the Stulture Network</p>
          </div>
        </div>
      </div>

      <div className="bg-[url('/section3.png')] bg-center bg-cover text-center text-white md:h-screen h-screen p-10">
        <h2 data-aos="zoom-in" className="text-2xl mt-5 text-white text-center">
          Bridging the GAP between Companies and Designers{" "}
        </h2>

        <div data-aos="zoom-in" className="line my-10 h-1 w-1/2 bg-white mx-auto"></div>

        <p data-aos="zoom-in" className="my-10 text-sm">
          The Stulture Network helps Companies connect with the best potential
          designers to hire while also helping the designers get exposed to
          various companies.
        </p>

        <p data-aos="zoom-in" className="my-10 text-sm">
          We do so by hosting design competitions on behalf of various companies
          that are scouting to hire new designers .
        </p>

        <p data-aos="zoom-in" className="my-10 text-sm">
          Hosting customised design competitions helps the companies hire the
          right designers for the comapnies specific needs .
        </p>
      </div>

      <div className="bg-[url('/section4.png')] bg-center bg-cover text-center text-white md:h-screen h-[130vh] p-10">
        <h2 className="text-2xl mt-5 text-white text-center">LEAGUES</h2>

        <div className="line m-2 h-0.5 w-1/2 bg-white mx-auto"></div>

        <div className="flex md:flex-row h-full pt-10 flex-col justify- items-center max-w-4xl m-auto">
          <img src="/leauge.png" data-aos="fade-up-right" className=" md:w-2/5" alt="" />

          <div data-aos="fade-up-left" className="bg-black bg-opacity-50 md:w-2/5 m-auto flex p-5">
            <div className="w-3/5 text-xs md:text-sm text-left flex flex-col justify-around">
              <p>
                Accumulate PTS by outworking yourself and move up the Leagues
              </p>

              <p>
                Moving up the leagues will help you unlock better challenges and
                greater opportunities
              </p>
            </div>
            <div className="w-1/5 ml-5">
              <img src="/arial.png" alt="" className="animate-spin-slow my-5" />
              <img src="/carbon.png" alt="" className="animate-spin-slow my-5" />
              <img src="/pixel.png" alt="" className="animate-spin-slow my-5" />
              <img src="/styrene.png" alt="" className="animate-spin-slow my-5" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[url('/pod2.png')] bg-center bg-cover text-white h-screen p-10">
        <h2 className="text-2xl mt-5 max-w-xs text-white ">
          STEP INTO AN ALTERNATE WORLD OF CONCEPT VISUALISATION
        </h2>
      </div>

      <div className=" bg-[url('/carbon-pod.png')] bg-center bg-cover flex flex-col justify-center items-center text-white h-screen p-10">
        <h2 data-aos="zoom-in" className="text-2xl mt-5 text-white ">S T L T R V R S</h2>
        <p data-aos="zoom-in">COMING SOON</p>
      </div>

      <div className="bg-stone-900 p-10 text-center my-10">
        <h2 className="text-2xl text-white ">AVAILABLE</h2>
        <h2 className="text-2xl  text-red-600 ">CHALLENGES</h2>
      </div>

      <div className="w-10/12 md:w-1/3 md:text-center bg-[url('/challenge.png')] h-80 bg-cover m-auto bg-center p-6 mb-5">
        <div className="bg-black bg-opacity-70 w-full flex flex-col justify-between p-3 h-full">
          <h2 className="text-xl text-white ">
            THE ULTIMATE INDIAN SHOE DESIGN CHALLENGE !
          </h2>

          <h2 className="text-center text-xs text-white">
            THE WINNER OF THIS CHALLENGE WILL GET TO BE A PART OF NEEMANS AS A
            FOOTWEAR DESIGNER
          </h2>
        </div>
      </div>

      <div className="w-full text-center my-5">
      <Link href={'/challenges'} >
        <button className="px-20 py-2 text-lg font-extrabold  bg-white">
          ENTER
        </button>
      </Link>
      </div>
    </>
  );
}
