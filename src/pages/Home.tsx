import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import ColourfulText from "@/components/ui/colourful-text";
import Cards from "@/modules/cards";
import APIStack from "@/modules/APIStack";
import NavBar from "@/modules/NavBar";
import Footer from "@/modules/Footer";
import Help from "@/modules/Help";
import CodeTabs from "@/modules/CodeTabs";
import { Link } from "react-router-dom";

const Home = () => {
  const words = `Welcome to API Stack Your one-stop destination to explore,
         access, and integrate powerful APIs effortlessly.
         Simplify development and supercharge your projects today!`;
  return (
    <div className="min-h-screen bg-black">
      <NavBar />
      <div className="pt-32 text-white ml-5 mr-5">
        <h1
          className="text-xl md:text-3xl lg:text-4xl font-bold text-center
         text-white relative z-2 font-sans"
        >
          Unlock the Power of <ColourfulText text={"Seamless "} /> API
          Integration
        </h1>
      </div>
      <div className="flex items-center flex-col gap-16 text-center justify-center m-5 md:mr-44 md:ml-44">
        <TextGenerateEffect duration={2} filter={false} words={words} />
        <Link to={"/api/docs"}>
          <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-52 cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-semibold text-white backdrop-blur-3xl">
              Interactive Docs
            </span>
          </button>
        </Link>
      </div>
      <div>
        <Cards />
      </div>
      <h1 className="text-white text-4xl text-center font-bold m-5">
        Why to choose API Stack ?
      </h1>
      <div>
        <APIStack />
      </div>
      <div className="py-10 flex justify-center items-center mt-5">
        <Link to={"/api/docs"}>
          <button className="p-[3px] relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
            <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
              Interactive Documention
            </div>
          </button>
        </Link>
      </div>
      <div className="mt-5 mb-10">
        <h1 className="text-white text-3xl text-center font-bold mb-8">
          Code avaible in multiple languages
        </h1>
        <CodeTabs />
      </div>
      <div className="mt-10">
        <Help />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
