"use client";
import { Inter } from "@next/font/google";
import Link from "next/link";
import { Header } from "./components/Header";
import NavBar from "./components/NavBar";
import { Restaurant } from "./components/Restaurant";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        <NavBar />
        <main>
          <Header />

          {/* CARDS */}
          <Link href="/restaurant/milestone-grill">
            <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
              <Restaurant />
            </div>
          </Link>
          {/* CARDS */}
        </main>
      </main>
    </main>
  );
}
