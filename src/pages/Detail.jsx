import React, { useEffect } from "react";
import { Header } from "../components/fragments/Header";
import { Footer } from "../components/fragments/Footer";
import { useLocation } from "react-router-dom";
import { useDataQueryDetails } from "../services/GetDetails";
import { DetailMovie } from "../redux/action/dataDetailMovie";
import { useDispatch, useSelector } from "react-redux";

export const Detail = () => {
  const { state } = useLocation();
  const idMovie = state.movie_id;

  const Data = useSelector((state) => state.movie.dataDetailMovie);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(DetailMovie(idMovie));
  }, [dispatch]);

  console.log(Data.data, "Data");
  console.log(state.movie_id, "IdMovie");

  const dateFormat = (release) => {
    const date = new Date(release);

    const namaBulan = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const tanggal = date.getDate();
    const bulanIndex = date.getMonth();
    const tahun = date.getFullYear();

    const tanggalAkhir = `${tanggal} ${namaBulan[bulanIndex]} ${tahun}`;

    return tanggalAkhir;
  };

  return (
    <div className="m-0">
      <Header />

      {Data.data && (
        <div>
          <div className="flex items-center relative px-14 pt-6 bg-main">
            <img src={`https://image.tmdb.org/t/p/original/${Data.data.data.backdrop_path}`} alt="" className="w-full h-[90vh] object-cover rounded-xl brightness-50" />
            <div className="w-1/2 flex flex-col absolute px-12 py-4 text-white">
              <div className="-mt-6 text-4xl 2xl:text-5xl font-bold mb-2 2xl:mb-3">{Data.data.data.title}</div>
              <div className="flex gap-4 text-sm 2xl:text-base font-medium mb-7">
                {Data?.data?.data?.genres?.map((genre, index) => {
                  return (
                    <div key={index} className="px-4 py-2 bg-gray-400/50 rounded-2xl">
                      {genre.name}
                    </div>
                  );
                })}
              </div>
              <div className="flex gap-4 text-sm 2xl:text-base font-medium mb-1 2xl:mb-2">
                <div>{dateFormat(Data.data.data.release_date)}</div>
                <div>|</div>
                <div>{Data.data.data.adult ? "21+" : "18+"}</div>
                <div>|</div>
                <div>{Data?.data?.data?.vote_average.toFixed(1)} / 10.0</div>
              </div>
              <div className="text-sm 2xl:text-base font-medium">{Data.data.overview}</div>
            </div>
          </div>

          <div className="px-14 pt-6 bg-main">
            <div className="flex gap-10 px-10 py-6 bg-white/20 backdrop-blur rounded-xl text-white">
              <img src={`https://image.tmdb.org/t/p/original/${Data.data.data.poster_path}`} alt="" className="w-36 rounded" />
              <div className="flex flex-col gap-3 py-2 text-sm">
                <div className="flex">
                  <div className="w-[110px]">Title</div>
                  <div>: {Data.data.data.title}</div>
                </div>
                <div className="flex">
                  <div className="w-[110px]">Genre</div>
                  <div>
                    :{" "}
                    {Data?.data?.data?.genres.map((genre) => {
                      return `${genre.name} | `;
                    })}
                  </div>
                </div>
                <div className="flex">
                  <div className="w-[110px]">Release date</div>
                  <div>: {dateFormat(Data.data.data.release_date)}</div>
                </div>
                <div className="flex">
                  <div className="w-[110px]">Rating</div>
                  <div>: {Data?.data?.data?.vote_average.toFixed(1)} / 10.0</div>
                </div>
                <div className="flex">
                  <div className="w-[110px]">Description</div>
                  <div className="w-3/5 ">: {Data.data.data.overview}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};
