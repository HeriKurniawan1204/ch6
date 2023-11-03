import React, { useState } from "react";
import { Button } from "../elements/Button";
import { Carousel } from "@material-tailwind/react";
import { useDataQueryUpcoming } from "../../services/GetUpcoming";
import { useDataQueryTrailers } from "../../services/GetTrailers";

export const Hero = () => {
  const { data: fetchUpcoming } = useDataQueryUpcoming();
  const upcoming = fetchUpcoming?.results || [];

  const [movieId, setMovieId] = useState("");
  const { data: fetchTrailer } = useDataQueryTrailers({
    movie_id: movieId,
    language: "en-US",
  });
  const trailer = fetchTrailer?.results || [];

  const trailerMovie = () => {
    const result = trailer.filter((value) => {
      if (value.type === "Trailer") {
        return value.key;
      }
    });

    return result[0]?.key;
  };

  if (movieId !== undefined && trailerMovie() !== undefined) {
    window.open(`https://www.youtube.com/watch?v=${trailerMovie()}`, "_blank");
  }

  const renderUpcoming = () => {
    return upcoming.slice(5, 10).map((value, index) => {
      return (
        <div
          key={index}
          className="flex items-center gap-4 px-14 h-[75vh] my-auto"
        >
          <div className="w-1/2 pe-24 text-justify">
            <div className="font-bold text-5xl mb-3">{value.title}</div>
            <div className="mb-5">{value.overview}</div>
            <div onClick={() => setMovieId(value.id)}>
              <Button
                text="Watch Trailer"
                textColor="text-secondary"
                textHover="hover:text-white"
                bgColor="bg-main"
                width="w-32"
                bgHover="hover:bg-secondary"
              />
            </div>
          </div>
          <img
            src={`https://image.tmdb.org/t/p/original/${value.backdrop_path}`}
            alt=""
            className="w-1/2 object-cover rounded shadow-lg shadow-gray-600"
          />
        </div>
      );
    });
  };
  return (
    <Carousel
      className="text-white bg-main"
      prevArrow={false}
      nextArrow={false}
      loop={true}
      autoplay={true}
      autoplayDelay={5100}
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      {renderUpcoming()}
    </Carousel>
  );
};
