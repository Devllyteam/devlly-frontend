"use client";

import Footer from "@/components/footer";

import HeroAi from "@/components/hero";

import { NavBar } from "@/components/navbar";

const Page = () => {
  return (
    <>
      <div className="">
        <NavBar />
        <main className="">
          <HeroAi />
          <Footer />
        </main>
      </div>
    </>
  );
};

export default Page;
