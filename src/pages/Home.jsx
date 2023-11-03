import { Header } from "../components/fragments/Header";
import { Hero } from "../components/fragments/Hero";
import { Footer } from "../components/fragments/Footer";
import { ListMoviesNowPlaying } from "../components/fragments/ListMoviesNowPlaying";
import { ListMoviesPopular } from "../components/fragments/ListMoviesPopular";
import { GetMeAction } from "../redux/action/authLogin";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export const Home = () => {
  const dispatch = useDispatch();

  const getMe = () => {
    dispatch(GetMeAction());
  };

  useEffect(() => {
    getMe();
  });
  return (
    <div className="m-0">
      <Header />
      <Hero />
      <ListMoviesNowPlaying />
      <ListMoviesPopular />
      <Footer />
    </div>
  );
};
