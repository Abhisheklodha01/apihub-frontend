import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div
      className="dark bg-black flex justify-between items-center
     text-white py-4 md:pl-28 md:pr-10 pl-4 pr-4"
    >
      <Link className="text-2xl font-bold text-purple-500" to={"/"}>
        APIStack
      </Link>
      <Link to={"/auth/signup"}>
      <button className="px-8 py-2 rounded-full bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200">
  Signup
</button>
      </Link>
    </div>
  );
};

export default NavBar;
