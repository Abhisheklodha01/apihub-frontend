import { userContex } from "@/context/userContex";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
export const UserProfile = () => {
  const navigate = useNavigate();
  const { user } = React.useContext(userContex);
  if (user?.isVerified === false) {
    navigate("/auth/verify-email");
  }
  return (
    <div className="min-h-screen dark:">
      <div className="m-5 items-center flex justify-between">
        <Link to={"/"}>
          <h1 className="font-bold text-3xl text-purple-600">Home</h1>
        </Link>
        <Link to={"/api/docs"} className="mr-3">
          <button
            className="px-8 py-2 rounded-full bg-gradient-to-b from-blue-500
             to-blue-600 text-white focus:ring-2 focus:ring-blue-400
              hover:shadow-xl transition duration-200 "
          >
            Visit Docs
          </button>
        </Link>
      </div>
      <div className="text-xl font-bold mt-10">
        <h1 className="ml-4 md:ml-16">Your Details</h1>
        <div className="ml-6 md:ml-20">
          <p>
            User ID: <span className="font-semibold text-lg">{user?._id}</span>
          </p>
          <p>
            Name: <span className="font-semibold text-lg">{user?.name}</span>
          </p>
          <p>
            Email: <span className="font-semibold text-lg">{user?.email}</span>
          </p>
          <p>
            Phone Number:{" "}
            <span className="font-semibold text-lg">{user?.phoneNumber}</span>
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-6 gap-5 md:m-10 mt-10 pb-10">
        <Link to={"/api/docs"}>
          <button
            className="border border-slate-200 bg-white shadow-sm hover:bg-slate-100
           hover:text-slate-900 dark:border-slate-800
           dark:bg-slate-950 dark:hover:bg-slate-800
            dark:hover:text-slate-50 rounded-full py-1.5
            w-[350px] ml-8 md:ml-0 md:w-52 text-center"
          >
            Articles
          </button>
        </Link>
        <Link to={"/api/docs"}>
          <button
            className="border border-slate-200 bg-white shadow-sm hover:bg-slate-100
           hover:text-slate-900 dark:border-slate-800
           dark:bg-slate-950 dark:hover:bg-slate-800
            dark:hover:text-slate-50 rounded-full py-1.5
            w-[350px] ml-8 md:ml-0 md:w-52 text-center"
          >
            Books
          </button>
        </Link>
        <Link to={"/api/docs"}>
          <button
            className="border border-slate-200 bg-white shadow-sm hover:bg-slate-100
           hover:text-slate-900 dark:border-slate-800
           dark:bg-slate-950 dark:hover:bg-slate-800
            dark:hover:text-slate-50 rounded-full py-1.5
            w-[350px] ml-8 md:ml-0 md:w-52 text-center"
          >
            Cars
          </button>
        </Link>
        <Link to={"/api/docs"}>
          <button
            className="border border-slate-200 bg-white shadow-sm hover:bg-slate-100
           hover:text-slate-900 dark:border-slate-800
           dark:bg-slate-950 dark:hover:bg-slate-800
            dark:hover:text-slate-50 rounded-full py-1.5
            w-[350px] ml-8 md:ml-0 md:w-52 text-center"
          >
            Cats
          </button>
        </Link>
        <Link to={"/api/docs"}>
          <button
            className="border border-slate-200 bg-white shadow-sm hover:bg-slate-100
           hover:text-slate-900 dark:border-slate-800
           dark:bg-slate-950 dark:hover:bg-slate-800
            dark:hover:text-slate-50 rounded-full py-1.5
            w-[350px] ml-8 md:ml-0 md:w-52 text-center"
          >
            Country
          </button>
        </Link>
        <Link to={"/api/docs"}>
          <button
            className="border border-slate-200 bg-white shadow-sm hover:bg-slate-100
           hover:text-slate-900 dark:border-slate-800
           dark:bg-slate-950 dark:hover:bg-slate-800
            dark:hover:text-slate-50 rounded-full py-1.5
            w-[350px] ml-8 md:ml-0 md:w-52 text-center"
          >
            Dogs
          </button>
        </Link>
        <Link to={"/api/docs"}>
          <button
            className="border border-slate-200 bg-white shadow-sm hover:bg-slate-100
           hover:text-slate-900 dark:border-slate-800
           dark:bg-slate-950 dark:hover:bg-slate-800
            dark:hover:text-slate-50 rounded-full py-1.5
            w-[350px] ml-8 md:ml-0 md:w-52 text-center"
          >
            Flowers
          </button>
        </Link>
        <Link to={"/api/docs"}>
          <button
            className="border border-slate-200 bg-white shadow-sm hover:bg-slate-100
           hover:text-slate-900 dark:border-slate-800
           dark:bg-slate-950 dark:hover:bg-slate-800
            dark:hover:text-slate-50 rounded-full py-1.5
            w-[350px] ml-8 md:ml-0 md:w-52 text-center"
          >
            Food_Nutrition
          </button>
        </Link>
        <Link to={"/api/docs"}>
          <button
            className="border border-slate-200 bg-white shadow-sm hover:bg-slate-100
           hover:text-slate-900 dark:border-slate-800
           dark:bg-slate-950 dark:hover:bg-slate-800
            dark:hover:text-slate-50 rounded-full py-1.5
            w-[350px] ml-8 md:ml-0 md:w-52 text-center"
          >
            Hotels
          </button>
        </Link>
        <Link to={"/api/docs"}>
          <button
            className="border border-slate-200 bg-white shadow-sm hover:bg-slate-100
           hover:text-slate-900 dark:border-slate-800
           dark:bg-slate-950 dark:hover:bg-slate-800
            dark:hover:text-slate-50 rounded-full py-1.5
            w-[350px] ml-8 md:ml-0 md:w-52 text-center"
          >
            Images
          </button>
        </Link>
        <Link to={"/api/docs"}>
          <button
            className="border border-slate-200 bg-white shadow-sm hover:bg-slate-100
           hover:text-slate-900 dark:border-slate-800
           dark:bg-slate-950 dark:hover:bg-slate-800
            dark:hover:text-slate-50 rounded-full py-1.5
            w-[350px] ml-8 md:ml-0 md:w-52 text-center"
          >
            Insta_Reels
          </button>
        </Link>
        <Link to={"/api/docs"}>
          <button
            className="border border-slate-200 bg-white shadow-sm hover:bg-slate-100
           hover:text-slate-900 dark:border-slate-800
           dark:bg-slate-950 dark:hover:bg-slate-800
            dark:hover:text-slate-50 rounded-full py-1.5
            w-[350px] ml-8 md:ml-0 md:w-52 text-center"
          >
            Jokes
          </button>
        </Link>
        <Link to={"/api/docs"}>
          <button
            className="border border-slate-200 bg-white shadow-sm hover:bg-slate-100
           hover:text-slate-900 dark:border-slate-800
           dark:bg-slate-950 dark:hover:bg-slate-800
            dark:hover:text-slate-50 rounded-full py-1.5
            w-[350px] ml-8 md:ml-0 md:w-52 text-center"
          >
            Movies
          </button>
        </Link>
        <Link to={"/api/docs"}>
          <button
            className="border border-slate-200 bg-white shadow-sm hover:bg-slate-100
           hover:text-slate-900 dark:border-slate-800
           dark:bg-slate-950 dark:hover:bg-slate-800
            dark:hover:text-slate-50 rounded-full py-1.5
            w-[350px] ml-8 md:ml-0 md:w-52 text-center"
          >
            Plants
          </button>
        </Link>
        <Link to={"/api/docs"}>
          <button
            className="border border-slate-200 bg-white shadow-sm hover:bg-slate-100
           hover:text-slate-900 dark:border-slate-800
           dark:bg-slate-950 dark:hover:bg-slate-800
            dark:hover:text-slate-50 rounded-full py-1.5
            w-[350px] ml-8 md:ml-0 md:w-52 text-center"
          >
            Products
          </button>
        </Link>
        <Link to={"/api/docs"}>
          <button
            className="border border-slate-200 bg-white shadow-sm hover:bg-slate-100
           hover:text-slate-900 dark:border-slate-800
           dark:bg-slate-950 dark:hover:bg-slate-800
            dark:hover:text-slate-50 rounded-full py-1.5
            w-[350px] ml-8 md:ml-0 md:w-52 text-center"
          >
            Programming
          </button>
        </Link>
        <Link to={"/api/docs"}>
          <button
            className="border border-slate-200 bg-white shadow-sm hover:bg-slate-100
           hover:text-slate-900 dark:border-slate-800
           dark:bg-slate-950 dark:hover:bg-slate-800
            dark:hover:text-slate-50 rounded-full py-1.5
            w-[350px] ml-8 md:ml-0 md:w-52 text-center"
          >
            Quotes
          </button>
        </Link>
        <Link to={"/api/docs"}>
          <button
            className="border border-slate-200 bg-white shadow-sm hover:bg-slate-100
           hover:text-slate-900 dark:border-slate-800
           dark:bg-slate-950 dark:hover:bg-slate-800
            dark:hover:text-slate-50 rounded-full py-1.5
            w-[350px] ml-8 md:ml-0 md:w-52 text-center"
          >
            Restaurents
          </button>
        </Link>
        <Link to={"/api/docs"}>
          <button
            className="border border-slate-200 bg-white shadow-sm hover:bg-slate-100
           hover:text-slate-900 dark:border-slate-800
           dark:bg-slate-950 dark:hover:bg-slate-800
            dark:hover:text-slate-50 rounded-full py-1.5
            w-[350px] ml-8 md:ml-0 md:w-52 text-center"
          >
            Todos
          </button>
        </Link>
        <Link to={"/api/docs"}>
          <button
            className="border border-slate-200 bg-white shadow-sm hover:bg-slate-100
           hover:text-slate-900 dark:border-slate-800
           dark:bg-slate-950 dark:hover:bg-slate-800
            dark:hover:text-slate-50 rounded-full py-1.5
            w-[350px] ml-8 md:ml-0 md:w-52 text-center"
          >
            Youtube_Videos
          </button>
        </Link>
      </div>
    </div>
  );
};
