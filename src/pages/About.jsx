import React from "react";
import { Header } from "../components/fragments/Header";
import { Footer } from "../components/fragments/Footer";
import profile from "../assets/img/profile.jpg";
import reacticon from "../assets/img/react-icon.png";
import tailwindicon from "../assets/img/tailwind-icon.png";
import tmdbicon from "../assets/img/tmdb-icon.png";

export const About = () => {
  return (
    <div>
      <Header />
      <div className="px-14 pt-10 pb-36 bg-main text-white text-center">
        <div>
          <img
            src={profile}
            alt=""
            className="w-40 h-40 mx-auto rounded-full object-cover mb-6"
          />
        </div>
        <div className="italic font-bold text-2xl text-secondary">
          MOVIES APP
        </div>
        <hr className="w-1/6 mx-auto bg-white/60 my-2" />
        <div className="flex justify-center items-center gap-3 mb-5">
          <img src={reacticon} alt="" className="w-6 object-cover rounded" />
          <img src={tailwindicon} alt="" className="w-9 object-cover rounded" />
          <img src={tmdbicon} alt="" className="w-7 object-cover rounded" />
        </div>
        <div className="w-3/5 flex flex-col gap-3 mx-auto text-left text-sm">
          <div className="border border-secondary rounded-xl p-4">
            <div className="flex items-center gap-2 mb-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-caret-right-fill"
                viewBox="0 0 16 16"
              >
                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
              </svg>
              <div className="font-semibold">Tentang Projek</div>
            </div>
            <div className="indent-6 text-justify">
              <span className="italic">Movies App</span> merupakan projek untuk
              challenge Chapter 4 Studi Independen{" "}
              <span className="text-purple-600 italic">
                Binar Academy Batch 5
              </span>
              . Untuk tech-stack yang digunakan adalah{" "}
              <span className="text-blue-500">ReactJs</span> &{" "}
              <span className="text-blue-500">Tailwind</span>. Pada projek kali
              ini, saya menggunakan{" "}
              <span className="text-blue-500">TMDB API</span>. Ini pertama kalinya saya menggunakan API pada sebuah projek website.
            </div>
            <div className="indent-6 text-justify">
              Disini saya menggunakan 5 endpoint, yaitu <span className="text-blue-500">now playing, popular, search, details & upcoming</span>. Kemudian untuk handle API-nya sendiri menggunakan <span className="text-blue-500">Axios & TanStack React Query</span>. Fitur pada website ini hanya untuk menampilkan data movie now playing & popular, lalu menampilkan detail movie ketika salah satu movie di klik.
            </div>
          </div>
          <div className="border border-secondary rounded-xl p-4">
            <div className="flex items-center gap-2 mb-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-caret-right-fill"
                viewBox="0 0 16 16"
              >
                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
              </svg>
              <div className="font-semibold">Kriteria / Ketentuan</div>
            </div>
            <div className="indent-6 text-justify">
              <ul>
                <li>
                  1. Menggunakan React.JS untuk membuat tampilan web (consume
                  API & routing)
                </li>
                <li>2. Menggunakan API dari The Movie Database (TMDB API)</li>
                <li>
                  3. Melakukan styling pada React.JS sesuai design yang
                  disediakan
                </li>
                <li>4. Mengimplementasikan code structure dalam React.Js</li>
                <li>5. Penggunaan framework CSS</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
