import React from "react";
import { Header } from "../components/fragments/Header";
import { Footer } from "../components/fragments/Footer";
import { ListNowPlaying } from "../components/fragments/ListNowPlaying";

export const NowPlaying = () => {
  return (
    <div className="mb-0">
      <Header />
      <ListNowPlaying />
      <Footer />
    </div>
  );
};
