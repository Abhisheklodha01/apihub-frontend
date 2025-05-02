import React from "react";
import axios from "axios";
import { userContex } from "@/context/userContex";
import { backendUrl } from "@/utils/server";
import toast from "react-hot-toast";
import { useNavigate, Link } from "react-router-dom";

const ViewData = () => {
  interface APIResponse {
    table_name: string;
    row_count: number;
  }
  const navigate = useNavigate();
  const { user, isAuthenticated } = React.useContext(userContex);
  const [dbData, setDbData] = React.useState<APIResponse[]>();

  const fetchDbDetails = async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/admin/db`, {
        headers: {
          "Content-Type": "application/json",
          "x-admin-header": user?.email,
        },
      });
      setDbData(data.result);
      toast.success(data.message, {
        position: "top-center",
      });
    } catch (error: any) {
      toast.error(error.response.data.message, {
        position: "top-center",
      });
    }
  };

  React.useEffect(() => {
    fetchDbDetails();
  }, []);
  console.log(dbData);

  if (isAuthenticated === false) {
    navigate("/auth/login");
  }

  return (
    <div className="dark min-h-screen text-slate-200">
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
      <h1 className="pt-10 ml-5 text-2xl">Available Data In Databse </h1>
      <div className="flex flex-col justify-between items-start gap-4 m-10">
        {dbData?.map((dbTable) => (
          <div>
            <h2>
              Table Name:{" "}
              <span>
                {dbTable?.table_name === "_prisma_migrations"
                  ? "Total Table"
                  : dbTable?.table_name}
              </span>
            </h2>
            <h2>
              Available Rows: <span>{dbTable?.row_count}</span>
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewData;
