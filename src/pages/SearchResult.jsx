import React from "react";
import { Header } from "../components/fragments/Header";
import { Footer } from "../components/fragments/Footer";
import { ListSearch } from "../components/fragments/ListSearch";

export const SearchResult = () => {
  return (
    <div className="m-0">
      <Header />
      <ListSearch />
      <Footer />
    </div>
  );
};
