import React from "react";
import { Input } from "../elements/Input";
import { useNavigate } from "react-router-dom";
import ava from "../../assets/img/ava.jpg";
import { useDataMe } from "../../services/GetMe";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/action/authLogin";

export const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSearch = (keyword) => {
    navigate("/search", {
      state: {
        search: keyword,
      },
    });
  };

  const { data: fetchMe, isSuccess } = useDataMe();
  const dataMe = isSuccess ? fetchMe : {};

  return (
    <div className="flex justify-between items-center px-14 py-7 gap-3 bg-main text-white">
      <div onClick={() => navigate("/home")} className="px-5 py-1.5 font-bold border-b border-secondary shadow shadow-secondary cursor-pointer">
        <span className="text-secondary">Heroisme</span>
        <span> Movies</span>
      </div>
      <div>
        <Input handle={handleSearch} />
      </div>
      <div className="flex items-center gap-8 text-sm font-semibold">
        <div onClick={() => navigate("/nowplaying")} className="cursor-pointer hover:text-secondary">
          Now Playing
        </div>
        <div onClick={() => navigate("/popular")} className="cursor-pointer hover:text-secondary">
          Popular
        </div>
        <div className="flex items-center gap-2 border border-secondary rounded-full pe-3">
          <img src={ava} alt="" className="w-8 h-8 rounded-full object-cover" />
          <div className="text-secondary">{dataMe.name}</div>
        </div>
        <button
          onClick={() => {
            dispatch(logOut());
          }}
          className="py-1.5 w-[85px] text-white hover:text-red-500 text-sm font-semibold bg-red-500 border border-red-500 rounded-lg hover:bg-main hover:shadow-md hover:shadow-red-500"
        >
          Logout
        </button>
      </div>
    </div>
  );
};
