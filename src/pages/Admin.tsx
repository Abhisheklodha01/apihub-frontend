import { ButtonOutline } from "@/components/Button";
import { Link } from "react-router-dom";
export const Admin = () => {
  return (
    <div className="min-h-screen dark">
      <div className="m-5 items-center flex justify-between">
        <h1 className="font-bold text-3xl text-purple-600">Admin Panel</h1>
        <Link to={"/admin/data"}>
          <button
            className="px-8 py-2 rounded-full bg-gradient-to-b from-blue-500
             to-blue-600 text-white focus:ring-2 focus:ring-blue-400
              hover:shadow-xl transition duration-200"
          >
            View Data
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-6 gap-5 md:m-10 pb-10 pt-5">
        <div>
          <ButtonOutline text="Articles" />
        </div>
        <div>
          <ButtonOutline text="Books" />
        </div>
        <div>
          <ButtonOutline text="Cars" />
        </div>
        <div>
          <ButtonOutline text="Cats" />
        </div>
        <div>
          <ButtonOutline text="Country" />
        </div>
        <div>
          <ButtonOutline text="Dogs" />
        </div>
        <div>
          <ButtonOutline text="Flowers" />
        </div>
        <div>
          <ButtonOutline text="Food_Nutritions" />
        </div>
        <div>
          <ButtonOutline text="Hotels" />
        </div>
        <div>
          <ButtonOutline text="Images" />
        </div>
        <div>
          <ButtonOutline text="Insta_Reels" />
        </div>
        <div>
          <ButtonOutline text="Jokes" />
        </div>
        <div>
          <ButtonOutline text="Movies" />
        </div>
        <div>
          <ButtonOutline text="Plants" />
        </div>
        <div>
          <ButtonOutline text="Products" />
        </div>
        <div>
          <ButtonOutline text="Programming" />
        </div>
        <div>
          <ButtonOutline text="Quotes" />
        </div>
        <div>
          <ButtonOutline text="Restaurents" />
        </div>
        <div>
          <ButtonOutline text="Todos" />
        </div>
        <div>
          <ButtonOutline text="User" />
        </div>
        <div>
          <ButtonOutline text="Youtube_Videos" />
        </div>
      </div>
    </div>
  );
};
